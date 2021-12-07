import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to the server
    console.log('clicked');
  };

  return (
    <div className='contaniner'>
      <h2>Register</h2>
      <input
        placeholder='ID'
        type='number'
        value={id}
        onChange={handleIdChange}
      />
      <input
        placeholder='Name'
        type='text'
        value={name}
        onChange={handleNameChange}
      />
      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        placeholder='Username'
        type='text'
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        placeholder='Password'
        type='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button type='subimt' className='btn' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Register;
