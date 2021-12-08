import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
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
      <h2>Login</h2>

      <input
        placeholder='Email'
        type='email'
        value={email}
        onChange={handleEmailChange}
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

export default Login;
