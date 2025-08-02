import Testimonials from "../Model/TestimonialModel.js";

export const addTestimonials = async (req, res) => {
    try {
        const testimonial = new Testimonials({
            name: req.body.name,
            rating: req.body.rating,
            content: req.body.content
        });
        const newTestimonial = await testimonial.save();
        res.status(201).json(newTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonials.find().sort({ date: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


