import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url'; // Add this import
import Blog from '../Model/BlogModel.js';
import Category from '../Model/CategoryModel.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    // Check required fields first
    if (!title || !description || !category) {
      // If there's a file but other fields are missing, delete the uploaded file
      if (req.file) {
        const filePath = path.join(__dirname, '../public/uploads', req.file.filename);
        fs.unlink(filePath, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
      }
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const existingCat = await Category.findOne({ title: category });
    // console.log("the exat cate", existingCat)
    
    if (!existingCat) {
      // Delete the uploaded file if category doesn't exist
      const filePath = path.join(__dirname, '../public/uploads', req.file.filename);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      return res.status(400).json({ message: 'Category does not exist' });
    }

    // Ensure the blogs array exists
    if (!existingCat.blogs) {
      existingCat.blogs = [];
    }

    const newBlog = new Blog({
      title,
      description,
      image: req.file.filename,
      category: existingCat._id
    });

    await newBlog.save();
    existingCat.blogs.push(newBlog._id);
    await existingCat.save();

    return res.status(201).json({ message: 'Blog added successfully', blog: newBlog });
  } catch (error) {
    // Delete the uploaded file if error occurs
    if (req.file) {
      const filePath = path.join(__dirname, '../public/uploads', req.file.filename);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    console.error('Error adding blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



export const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 }).populate('category');
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id).populate('category');
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    console.log(err);
  }
}


export const getDescription = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};


export const updateBlog =async (req, res)=>{
  try{
    const {id} = req.params;
    const {title, description ,category} = req.body;
    const blog = await Blog.findByIdAndUpdate(id, {title, description,category},{new: true}).populate('category');
    const category1 = await Category.findOne({ blogs: blog._id });
    if (category1) {
      category1.blogs.pull(blog._id);
      await category1.save();
    }
    const existingCat = await Category.findOne({ _id: category });
    existingCat.blogs.push(blog._id);
    await existingCat.save();

    res.status(200).json({
      success: true,
      blog,
    });
  }catch(err){
    res.status(500).json({message: "Internal Server Error", error:err.message});
  }
}

export const deleteBlog  = async(req, res) => {
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



export const getImages = async (req, res) => {
  try {
    
    const image = await Blog.find({image});
    if (!image) {
      return res.status(404).json({ message: "image is not found" });
    }
    res.status(200).json({
      success: true,
      image
    })
  } catch (err) {
    console.log(err);
  }
};