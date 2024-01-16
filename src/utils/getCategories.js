import axios from 'axios';

export const getCategories = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/brands`, config)).data;
};
