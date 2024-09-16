import React, { useEffect, useState } from 'react';
import './PostComponent.css'; // Import your CSS file for styling (create this file)
import PostModal from './PostModal';
import { useDispatch, useSelector } from 'react-redux';
import { delete_product, get_user } from '../redux/action/actionPost';
import PostModalUpdate from './PostModalUpdate';
import Subscribe from '../components/Subscribe';

const PostComponent = ({ data, selectedLanguage }) => {
  const user = useSelector((state) => state.user);
  const [isModalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const token1 = localStorage.getItem('token');
    dispatch(get_user());
    setToken(token1);

    // Set `show1` to true when the component mounts
    setShow(true);

    // Clean up and set `show1` to false when the component unmounts
    return () => {
      setShow(false);
    };
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(delete_product(id));
  };

  return (
    <div>
     
      {/* Show Subscribe component only when `show1` is true */}
      {token === null? <Subscribe show={show} setShow={setShow} />:null}

      {data.map((post, index) => (
        <div key={index} className="post-container">
          <div className="post-header">
            <div className="user-info">
              <h2 style={{ color: "rgb(230, 203, 161)", fontWeight: 800, fontFamily: "sans-serif" }}>
                {post.title}
              </h2>
              <p>Postuler Le: {post.created_at.slice(0, 10)}</p>
            </div>
          </div>
          <div className="post-content">
            {post.imageUrl !== "null" && (
              <div>
                <img className="post-image" src={post.imageUrl} alt="post" />
              </div>
            )}

            {post.fileUrl && post.fileUrl.endsWith('.pdf') && (
              <iframe
                src={post.fileUrl}
                title="PDF File"
                width="100%"
                height="500px"
                style={{ border: 'none' }}
              />
            )}
          </div>
          <div id='text1'>
            <p style={{ fontFamily: "cursive", fontSize: "24px" }}>{post.text}</p>
          </div>
          {user.role === "admin" && token && (
            <>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => setModalUpdateOpen(true)}>Modifier Une Post</button>
              <PostModalUpdate post={post} isOpen={isModalUpdateOpen} onClose={() => setModalUpdateOpen(false)} />
            </>
          )}
        </div>
      ))}

      {user.role === "admin" && token && (
        <>
          <button onClick={() => setModalOpen(true)}>Ajouter Une Post</button>
          <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
      )}
    </div>
  );
};

export default PostComponent;
