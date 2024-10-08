import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate()
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://www.maitrelaaribi.com/api/login', { email, password });
      // Assuming the API returns a token upon successful login
      const token = response.data.token;
      // Store the token in localStorage or Redux state for future requests
      localStorage.setItem('token', token);
      // Redirect to the dashboard or perform other actions after successful login
      if(response.data.msg==="secsuss"){
        navigate('/')
      };
    } catch (err) {
      // Handle login error (e.g., display an error message)
      setError('Invalid email or password');
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}
      onKeyDown={handleKeyDown}
      >Login</button>
    </div>
  );
};

export default Login;
