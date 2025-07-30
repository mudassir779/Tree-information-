import Request from "../Model/RequestModel.js";
import fs from 'fs';
import path from 'path';

const addRequest = async (req, res) => {
    try {
        const { Service_details } = req.body
        const images = req.files;
        console.log(req);

        if(images){
            const imageList = [];
            images.forEach((image, index) => {
                imageList.join(image.filename);
            })
            console.log(imageList);        
        }

        // console.log(images);
        if (
            !Service_details.Tree_Removal &&
            !Service_details.Tree_Trimming &&
            !Service_details.Palm_Trimming &&
            !Service_details.Hurricane_Preparation &&
            !Service_details.Root_Health &&
            !Service_details.Tree_Maintenance_Planning) {
            return res.status(400).json({ message: "Please select at least one service" });
        }

        const newRequest = new Request(req.body);
        const savedRequest = await newRequest.save();

        res.status(201).json(savedRequest);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

const deleteRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRequest = await Request.findByIdAndDelete(id);
        if (!deletedRequest) {
            return res.status(404).json({ message: "Request not found" });
        }
        res.status(200).json({ message: "Request deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export { addRequest, getRequests, deleteRequest };