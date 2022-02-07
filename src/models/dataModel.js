import BaseItem from './baseItem';

class Item extends BaseItem {
  constructor({ id, price, sellerAddress, shipping, picture, title }) {
    super({ id, price, picture, title });
    this.sellerAddress = sellerAddress;
    this.shipping = shipping;
  }

  static fromJson = ({ id, price, address, picture, title, ...obj }) =>
    new Item({
      id,
      price,
      title,
      picture,
      shipping: obj.free_shipping,
      sellerAddress: address.state,
    });

  static toCustomResponse(items, categories) {
    return {
      author: {
        name: 'Jessica',
        lastname: 'Gonzalez',
      },
      categories: categories,
      items: items,
    };
  }

  static fromRawItem({
    condition,
    id,
    price,
    thumbnail,
    title,
    shipping,
    ...obj
  }) {
    return {
      id: id,
      title: title,
      price: {
        currency: obj.currency_id,
        amount: price,
        decimals: decimalsFromCurency(price),
      },
      picture: thumbnail,
      condition: condition,
      free_shipping: shipping.free_shipping,
      address: obj.seller_address,
    };
  }
}

function decimalsFromCurency(number) {
  const price = number / 100,
    decimals = Number.isInteger(price)
      ? price % 10
      : price.toString().slice(-2);
  return decimals;
}

export default Item;
