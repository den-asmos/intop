import axios from 'axios';

export const becomeSeller = async (id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return (await axios.get(`${process.env.REACT_APP_URL}/become_seller/${id}`, config)).data;
};
