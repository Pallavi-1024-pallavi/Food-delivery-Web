import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== confirmEmail) {
      setError('Emails do not match.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    alert('Signup successful!');
  };

  // ✅ Full-screen wrapper with background image
  const wrapperStyle = {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/201/844/small_2x/abstract-background-with-black-and-yellow-color-combination-gold-color-combination-vector.jpg")', // Change this URL
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent background
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

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
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
          <label style={labelStyle}>Confirm Email</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="Re-enter your email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
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
          <label style={labelStyle}>Confirm Password</label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
