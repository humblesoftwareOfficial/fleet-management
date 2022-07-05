import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('t');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('t', JSON.stringify(userToken));
    setToken(userToken.token);
    console.log('called')
  };

  return {
    setToken: saveToken,
    token
  }
}