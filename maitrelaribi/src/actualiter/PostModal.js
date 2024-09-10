import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling (create this file)
import {add_product} from '../redux/action/actionPost'
import { useDispatch } from 'react-redux';
import axios from 'axios';

const PostModal = ({ isOpen, onClose, onPostuler }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState([]);
  const [text, setText] = useState('');
  const [pdfFile, setPdfFile] = useState([]);
  const dispatch=useDispatch()
  
  const handlePostuler = async() => {
    const formData = new FormData();
    formData.append("file", imageUrl);
    formData.append("upload_preset", "maitrlaaribi");
  
    // First, upload the image to Cloudinary
    const imageUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formData);
  console.log(imageUploadResponse,'img')
    // Then, upload the PDF or any other file (if applicable)
    const formDatafile = new FormData();
formData.append("file", pdfFile);  // The selected PDF file
formData.append("upload_preset", "maitrlaaribi");
formData.append("resource_type", "auto");  // Specify resource type to auto

const fileUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", formDatafile)

    console.log("Uploaded file URL:", fileUploadResponse);
    // You should now get the correct URL for the PDF
 
 
    // Dispatch the data to the backend
    dispatch(add_product({
      title: title,
      text: text,
      imageUrl: imageUploadResponse.data.secure_url,  // Use uploaded image URL
      fileUrl: fileUploadResponse.data.secure_url  // Use uploaded file URL (PDF)
    }));
  
    // Reset input values
    setTitle('');
    setImageUrl('');
    setText('');
    setPdfFile(null);  // Reset the file input as well
  
    // Close the modal
    onClose();
  };
  
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create a New Post</h2>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Image URL:</label>
        <input type="file"  onChange={(e) => setImageUrl(e.target.files[0])} />
        <label>File:</label>
        <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept=".pdf" />
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handlePostuler}>Postuler</button>
      </div>
    </div>
  );
};

export default PostModal;
