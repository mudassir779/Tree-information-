import Blog from "../Model/BlogModel.js";
import Category from "../Model/CategoryModel.js";
import fs from 'fs';
import path from 'path';

export const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;


    if (!title || !description || !category) {
      const oldFilePath = path.join(__dirname, '../public/images', file.filename);
      fs.unlink(oldFilePath, (err) => {
        if (err) {
          console.error('Error deleting old file:', err);
        }
      })
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const existingCat = await Category.findOne({ title: category });
    if (!existingCat) {
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
    });

    await newBlog.save();
    existingCat.blogs.push(newBlog._id);
    await existingCat.save();

    return res.status(201).json({ message: 'Blog added successfully', blog: newBlog });
  } catch (error) {
    console.error('Error adding blog:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



export const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (err) {
    console.log(err);
  }
};

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