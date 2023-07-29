import axios from 'axios';


export default axios.create({
  baseURL: 'http://router.project-osrm.org/',
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  // },
});
