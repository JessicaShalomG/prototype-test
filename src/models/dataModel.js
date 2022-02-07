import BaseItem from './baseItem';

class Item extends BaseItem {
  constructor({ id, price, sellerAddress, shipping, thumbnail, title }) {
    super({ id, price, thumbnail, title });
    this.sellerAddress = sellerAddress;
    this.shipping = shipping;
  }

  static fromJson = ({ id, price, shipping, thumbnail, title, ...obj }) =>
    new Item({
      id,
      price,
      thumbnail,
      title,
      shipping: shipping.free_shipping,
      sellerAddress: obj.seller_address,
    });
}

export default Item;
