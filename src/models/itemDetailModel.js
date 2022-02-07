import BaseItem from './baseItem';

class ItemDetailModel extends BaseItem {
  constructor({ condition, id, price, sold, thumbnail, title, warranty }) {
    super({ id, price, thumbnail, title });
    this.condition = condition;
    this.sold = sold;
    this.warranty = warranty;
  }

  static fromJson = ({
    condition,
    id,
    price,
    thumbnail,
    title,
    warranty,
    ...obj
  }) =>
    new ItemDetailModel({
      condition,
      id,
      price,
      thumbnail,
      title,
      warranty,
      sold: obj.sold_quantity,
    });
}

export default ItemDetailModel;
