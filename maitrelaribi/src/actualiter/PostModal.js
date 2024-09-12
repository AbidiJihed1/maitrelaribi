import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling (create this file)
import { add_product } from '../redux/action/actionPost';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const PostModal = ({ isOpen, onClose, onPostuler }) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  
  const dispatch = useDispatch();
  
  const handlePostuler = async () => {
    try {
      if(imageUrl!=null){
        const imageFormData = new FormData();
        imageFormData.append("file", imageUrl);
        imageFormData.append("upload_preset", "maitrlaaribi");
  
        const imageUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", imageFormData);
        const uploadedImageUrl = imageUploadResponse.data.secure_url;
        dispatch(add_product({
          title: title,
          text: text,
          imageUrl: uploadedImageUrl,  // Use uploaded image URL
          fileUrl: null     // Use uploaded file URL (PDF)
        }));
      }else if(pdfFile!=null){
        const pdfFormData = new FormData();
        pdfFormData.append("file", pdfFile);
        pdfFormData.append("upload_preset", "maitrefile");
        pdfFormData.append("resource_type", "raw");  // Use raw for non-image files like PDF
        
        const pdfUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/raw/upload", pdfFormData);
        const uploadedPdfUrl = pdfUploadResponse.data.secure_url;
        
        
        dispatch(add_product({
          title: title,
          text: text,
          imageUrl: null,  // Use uploaded image URL
          fileUrl: uploadedPdfUrl     // Use uploaded file URL (PDF)
        }));

      }else if (imageUrl === null && pdfFile === null){
        dispatch(add_product({
          title: title,
          text: text,
          imageUrl: null,  // Use uploaded image URL
          fileUrl: null     // Use uploaded file URL (PDF)
        }));
      } else {
        const imageFormData = new FormData();
        imageFormData.append("file", imageUrl);
        imageFormData.append("upload_preset", "maitrlaaribi");
  
        const imageUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", imageFormData);
        const uploadedImageUrl = imageUploadResponse.data.secure_url;

        const pdfFormData = new FormData();
        pdfFormData.append("file", pdfFile);
        pdfFormData.append("upload_preset", "maitrefile");
        pdfFormData.append("resource_type", "raw");  // Use raw for non-image files like PDF
        
        const pdfUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/raw/upload", pdfFormData);
        const uploadedPdfUrl = pdfUploadResponse.data.secure_url;
        
        
        dispatch(add_product({
          title: title,
          text: text,
          imageUrl: uploadedImageUrl,  // Use uploaded image URL
          fileUrl: uploadedPdfUrl     // Use uploaded file URL (PDF)
        }));
      }
      // First, upload the image to Cloudinary
     

      // Then, upload the PDF or any other file (if applicable)
 
      // Dispatch the data to the backend
     

      // Reset input values
      setTitle('');
      setImageUrl(null);
      setText('');
      setPdfFile(null);

      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlePostuler();
    }
  };
  
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create a New Post</h2>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        
        <label>Image:</label>
        <input type="file" onChange={(e) => setImageUrl(e.target.files[0])} accept="image/*" />
        
        <label>PDF File:</label>
        <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept="application/pdf" />
        
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        
        <button onClick={handlePostuler} onKeyDown={handleKeyDown}
        >Postuler</button>
      </div>
    </div>
  );
};

export default PostModal;
