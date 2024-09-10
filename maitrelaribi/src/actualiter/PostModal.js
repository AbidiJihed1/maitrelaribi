// import React, { useState } from 'react';
// import './Modal.css'; // Import your CSS file for styling (create this file)
// import { add_product } from '../redux/action/actionPost';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';

// const PostModal = ({ isOpen, onClose, onPostuler }) => {
//   const [title, setTitle] = useState('');
//   const [imageUrl, setImageUrl] = useState(null);
//   const [text, setText] = useState('');
//   const [pdfFile, setPdfFile] = useState(null);
//   const dispatch = useDispatch();
  
//   const handlePostuler = async () => {
//     try {
//       // First, upload the image to Cloudinary
//       const imageFormData = new FormData();
//       imageFormData.append("file", imageUrl);
//       imageFormData.append("upload_preset", "maitrlaaribi");

//       const imageUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/upload", imageFormData);
//       const uploadedImageUrl = imageUploadResponse.data.secure_url;
//       console.log("Uploaded image URL:", uploadedImageUrl);

//       // Then, upload the PDF or any other file (if applicable)
//       const pdfFormData = new FormData();
// pdfFormData.append("file", pdfFile);
// pdfFormData.append("upload_preset", "maitrefile");
// pdfFormData.append("resource_type", "raw");  // Use raw for non-image files like PDF

// const pdfUploadResponse = await axios.post("https://api.cloudinary.com/v1_1/dm1xlu8ce/raw/upload", pdfFormData);
// const uploadedPdfUrl = pdfUploadResponse.data.secure_url;
// console.log("Uploaded PDF URL:", uploadedPdfUrl);


//       // Dispatch the data to the backend
//       dispatch(add_product({
//         title: title,
//         text: text,
//         imageUrl: uploadedImageUrl,  // Use uploaded image URL
//         fileUrl: uploadedPdfUrl      // Use uploaded file URL (PDF)
//       }));

//       // Reset input values
//       setTitle('');
//       setImageUrl(null);
//       setText('');
//       setPdfFile(null);

//       // Close the modal
//       onClose();
//     } catch (error) {
//       console.error("Error uploading files:", error);
//     }
//   };
  
//   return (
//     <div className={`modal ${isOpen ? 'open' : ''}`}>
//       <div className="modal-content">
//         <span className="close" onClick={onClose}>&times;</span>
//         <h2>Create a New Post</h2>
//         <label>Title:</label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        
//         <label>Image:</label>
//         <input type="file" onChange={(e) => setImageUrl(e.target.files[0])} accept="image/*" />
        
//         <label>PDF File:</label>
//         <input type="file" onChange={(e) => setPdfFile(e.target.files[0])} accept="application/pdf" />
        
//         <label>Text:</label>
//         <textarea value={text} onChange={(e) => setText(e.target.value)} />
        
//         <button onClick={handlePostuler}>Postuler</button>
//       </div>
//     </div>
//   );
// };

// export default PostModal;
import React, { useState } from 'react';
import axios from 'axios';

const PdfUpload = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      alert('Please select a PDF file to upload');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', pdfFile);
    formData.append('upload_preset', 'maitrefile'); // Ensure this preset is correctly configured
    formData.append('resource_type', 'raw'); // Required for PDFs and other raw files

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dm1xlu8ce/raw/upload', // Correct URL for raw files
        formData
      );
      setPdfUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading the file:', error.response ? error.response.data : error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {console.log(pdfUrl)}
      <h1>Upload PDF to Cloudinary</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>

      {pdfUrl && (
        <div>
          <h3>Uploaded PDF:</h3>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
