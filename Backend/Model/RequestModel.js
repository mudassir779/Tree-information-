import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    Contact_Details: {
        Fname: { type: String, required: true },
        Lname: { type: String, required: true },
        Company: { type: String, default: ' ' },
        Email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
        },
        Phone: { type: String, required: true }
    },

    Address: {
        Street1: { type: String, default: ' ' },
        Street2: { type: String, default: ' ' },
        City: { type: String, default: ' ' },
        State: { type: String, default: '' },
        Zip: { type: String, default: ' ' },
    },

    Service_details: {
        PropertyType: { type: String, required: true },
        Tree_Removal: { type: Boolean, default: false },
        Tree_Trimming: { type: Boolean, default: false },
        Palm_Trimming: { type: Boolean, default: false },
        Hurricane_Preparation: { type: Boolean, default: false },
        Root_Health: { type: Boolean, default: false },
        Tree_Maintenance_Planning: { type: Boolean, default: false },

        Job_Size: { type: String, default: ' ' },
        Job_Details: { type: String},
    },
    Availability: {
        Day: { type: Date },
        Another_Day: { type: Date },
        Arrival_time: { type: String, default: ' ' },
    },
    Images: { type: [String], default: [] },
    Status: {
        type: String, enum: ["Pending", "In-Progress", "Completed"],
        default: "Pending"
    }
}, {
    timestamps: true
});

const Request = mongoose.model('Request', RequestSchema);
export default Request;