import React, { useContext, useState } from 'react';
import Context from '../../context/context';
import http from '../http';

const LogIn = () => {
  const { setOpenModalLogin } = useContext(Context);
  const { setIsLoginUser } = useContext(Context);
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [checkData, setCheckData] = useState('');

  const authorization = async () => {
    const data = { username: username, password: password };
    try {
      const authorizationData = await http.post('/auth/login', data);
      const userData = authorizationData.data;
      if (authorizationData.data.token) {
        for (let key in userData) {
          localStorage.setItem(key, userData[key]);
        }
        setIsLoginUser(true);
        setOpenModalLogin(false);
        setUsername('');
        setPassword('');
      }
    } catch (e) {
      setCheckData('You entered an incorrect username or password');
    }
  };

  return (
    <>
      <div className='row container'>
        <input
          type='email'
          className='form-control m-3'
          value={username}
          placeholder='Enter username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <span className='mx-3 text-danger'>{checkData}</span>
        <input
          type='password'
          className='form-control m-3'
          value={password}
          placeholder='Enter password'
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button
        type='submit'
        className='btn btn-primary col-5 m-3 mx-auto'
        onClick={() => authorization()}
      >
        Login
      </button>
    </>
  );
};

export default LogIn;
