class Item {
  constructor({ price, sellerAddress, shipping, thumbnail, title }) {
    this.price = price;
    this.sellerAddress = sellerAddress;
    this.shipping = shipping;
    this.thumbnail = thumbnail;
    this.title = title;
  }

  static fromJson = ({ price, shipping, thumbnail, title, ...obj }) =>
    new Item({
      price,
      shipping,
      thumbnail,
      title,
      sellerAddress: obj.seller_address,
    });
}

export default Item;
