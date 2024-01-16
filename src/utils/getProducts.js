import axios from 'axios';

export const getProducts = async (limit = 1000) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/products?limit=${limit}`, config)).data;
};
