import ItemDetailModel from 'models/itemDetailModel';
import axios from 'axios';

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.config) {
        if (response.config.parseItem) {
          const test = ItemDetailModel.toCustomResponse(response.data);
          return test;
        }
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return axiosInstance;
}
