import axios from 'axios';
import qs from 'qs';

// Base URL
const baseURL = 'https://vithack2020.now.sh';

const sendMail = (email) => {
  return axios({
    method: 'post',
    url: `${baseURL}/subscription/add`,
    data: qs.stringify({ email, token: sessionStorage.token }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  }).then((res) => res.data);
};

export default sendMail;
