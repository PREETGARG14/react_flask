import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventdefault();
    // send data to the sever
  };

  return (
    <div className='contaniner'>
      <h2>Register</h2>
      <input placeholder='ID' id='id' value={id} />
      <input placeholder='Name' id='name' value={name} />
      <input placeholder='Email' id='email' value={email} />
      <input placeholder='Username' id='username' value={username} />
      <input placeholder='Password' id='password' value={password} />
      <button type='subimt' className='btn'>
        Submit
      </button>
    </div>
  );
};

export default Register;
