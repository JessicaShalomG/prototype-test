import Item from 'models/dataModel';
import ItemDetailModel from 'models/itemDetailModel';

//axios interceptors to modify data from API to match custom format desired

export function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.response.use(
    (response) => {
      if (!response.config) return response;
      if (response.config.parseItem) {
        const test = ItemDetailModel.toCustomResponse(response.data);
        return test;
      } else if (response.config.parseData) {
        const { results } = response.data;
        let itemsCategory = [];
        const firstFourItems = results.slice(0, 4);
        const processedItems = firstFourItems.map((item) => {
          itemsCategory.push(item.category_id);
          return Item.fromRawItem(item);
        });
        return Item.toCustomResponse(processedItems, itemsCategory);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return axiosInstance;
}
