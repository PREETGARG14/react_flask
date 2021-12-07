import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='contaniner'>
      <h2>Register</h2>
      <input placeholder='Name' id='name' />
      <input placeholder='Email' id='email' />
      <input placeholder='Passwors' id='password' />
    </div>
  );
};

export default Register;
