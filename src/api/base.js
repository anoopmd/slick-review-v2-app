import axios from "axios";

const apiClient = axios.create({
  baseURL: '/api/slick'
});

apiClient.interceptors.request.use((config) => {
  return ({
    ...config,
    headers: {
      'Content-Type': 'application/json'
    },
  })
},
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    return Promise.reject(error.response ? error.response.data : error);
  }
);

const { get, post, put, delete: destroy } = apiClient;

export { get, post, put, destroy };
