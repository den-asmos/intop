import axios from 'axios';

export const getStories = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/stories`, config)).data;
};
