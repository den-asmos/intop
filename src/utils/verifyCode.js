import axios from 'axios';

export const verifyCode = async (data) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(data);

  return (await axios.post(`${process.env.REACT_APP_URL}/confirm_by_phone_number`, body, config)).data;
};
