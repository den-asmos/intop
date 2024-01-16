import axios from 'axios';

export const getCode = async (phone) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/get_code/${phone}`, config)).data;
};
