import axios from 'axios';

export const httpGet = (uri, options) => axios.get(uri, options)

const URL = 'http://127.0.0.1:8000/api/v1/';

export const getDentists = async () => {  
    try {
      let response = await httpGet(URL + 'dentists', {});
      console.log('services::getDentists', response);
      return response.data?.data;
    } catch (error) {
      return console.error(error);
    }
  };