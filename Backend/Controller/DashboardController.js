import Blog from "../Model/BlogModel.js";
import Category from "../Model/CategoryModel.js";
import Request from "../Model/RequestModel.js";

const getData = async (req, res) => {
    try {
        const blogCount = await Blog.countDocuments();
        const categoryCount = await Category.countDocuments();
        const pendingCount = await Category.find({status:"Pending"}).countDocuments();
        res.status(200).json({
            blogCount,
            categoryCount,
            pendingCount
        });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}

export default getData;