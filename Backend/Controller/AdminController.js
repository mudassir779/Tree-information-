import User from "../Model/UserModel.js";
import Blog from "../Model/BlogModel.js";
import Category from "../Model/CategoryModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('Tree-Project', token, {
            httpOnly: true,
            secure:true, // Set to true if using HTTPS
            sameSite: 'None',
            maxAge: 1000 * 60 * 60, // 1 hour
        });

        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error in loginAdmin:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




export const adminLogout = (req, res) => {
    try {
        res.clearCookie('Tree-Project', {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        });
        return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error in adminLogout:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



export const deleteBlog = async(req,res)=>{
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const category = await Category.findOne({ blogs: blog._id });
        if (category) {
            category.blogs.pull(blog._id);
            await category.save();
        }
        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}



export const updateBlog = async(req,res)=>{
    try {
        const { id } = req.params;
        const { title, description } = req.body;
       
        
        // 
        await Blog.findByIdAndUpdate(id, { title, description })
        return res.status(200).json({ message: 'Blog updated successfully'});
    } catch (error) {
        console.error('Error updating blog:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}