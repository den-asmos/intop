import axios from 'axios';

export const getProductsByCategory = async (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/products/${id}`, config)).data;
};
