import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLODINARY_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

// Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'pdf'] // allowed file types
  }
});

// Multer upload instance
const upload = multer({ storage: storage });

export default upload;
