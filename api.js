import axios from 'axios';

const key = 'fc75ea0932423a9af30fc1260dc172f3';
const urlString = `https://cors-anywhere.herokuapp.com/https://avwx.rest/api/metar/kmci?token=${key}`;
console.log(urlString);
const fetchData = async () => {
  try {
    const response = await axios.get(urlString);
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

module.exports = fetchData;
