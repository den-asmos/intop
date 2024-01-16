import axios from 'axios';

export const getProductsWithFilters = async (filters, limit = 1000) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/products${filters}&limit=${limit}`, config)).data;
};
