import BaseItem from './baseItem';

class ItemDetailModel extends BaseItem {
  constructor({ condition, description, id, price, picture, sold, title }) {
    super({ id, price, picture, title });
    this.condition = condition;
    this.sold = sold;
    this.description = description;
  }

  static fromJson = ({
    condition,
    description,
    id,
    price,
    picture,
    title,
    ...obj
  }) =>
    new ItemDetailModel({
      condition,
      description,
      id,
      price,
      picture,
      title,
      sold: obj.sold_quantity,
    });

  static toCustomResponse({
    condition,
    id,
    price,
    shipping,
    thumbnail,
    title,
    ...obj
  }) {
    return {
      author: {
        name: 'Jessica',
        lastname: 'Gonzalez',
      },
      item: {
        id: id,
        title: title,
        price: {
          currency: obj.currency_id,
          amount: price,
          decimals: obj.base_price,
        },
        picture: thumbnail,
        condition: condition,
        free_shipping: shipping.free_shipping,
        sold_quantity: obj.sold_quantity,
        description: '',
      },
    };
  }
}

export default ItemDetailModel;
