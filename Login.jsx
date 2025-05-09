import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    alert('Login successful!');
    navigate('/dashboard');
  };

  // 🟡 Style declarations — make sure these are before the return
  const wrapperStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/201/844/small_2x/abstract-background-with-black-and-yellow-color-combination-gold-color-combination-vector.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    maxWidth: '400px',
    width: '100%',
    padding: '30px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    fontFamily: 'Georgia, serif',
    color: 'white',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: '#FFEB3B',
    color: 'black',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: '#e21b70',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const labelStyle = {
    fontWeight: '500',
    color: 'white',
    marginBottom: '5px',
    display: 'block',
  };

  // ✅ JSX return AFTER style declarations
  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        {error && <div style={errorStyle}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label style={labelStyle}>Password</label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
