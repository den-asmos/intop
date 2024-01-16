import axios from 'axios';

export const getUserInfo = async (userId) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/users/${userId}`, config)).data;
};
