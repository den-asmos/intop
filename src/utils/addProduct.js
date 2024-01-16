import axios from 'axios';

export const addProduct = (product) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  axios.post(`${process.env.REACT_APP_URL}/products`, product, config);
};
