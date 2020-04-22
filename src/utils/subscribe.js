import axios from 'axios';
import qs from 'qs';

// Base URL
const baseURL = `${process.env.REACT_APP_API_URL}`;

const sendMail = (email) => {
  return axios({
    method: 'post',
    url: `${baseURL}/subscription/add`,
    data: qs.stringify({ email, token: localStorage.token }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
};

export default sendMail;
