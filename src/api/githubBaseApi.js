import axios from 'axios';

const githubBaseApi = axios.create({
  baseURL: "https://jobs.github.com",
  timeout: 10000,
});

export default githubBaseApi;