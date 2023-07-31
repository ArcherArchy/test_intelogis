import axios from 'axios';


export default axios.create({
  baseURL: 'http://router.project-osrm.org/',
});
