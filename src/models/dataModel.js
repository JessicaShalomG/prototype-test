class Item {
  constructor({
    condition,
    id,
    price,
    sellerAddress,
    shipping,
    soldQuantity,
    thumbnail,
    title,
  }) {
    this.condition = condition;
    this.id = id;
    this.price = price;
    this.sellerAddress = sellerAddress;
    this.shipping = shipping;
    this.soldQuantity = soldQuantity;
    this.thumbnail = thumbnail;
    this.title = title;
  }

  static fromJson = ({
    condition,
    id,
    price,
    shipping,
    thumbnail,
    title,
    ...obj
  }) =>
    new Item({
      condition,
      id,
      price,
      shipping,
      thumbnail,
      title,
      sellerAddress: obj.seller_address,
      soldQuantity: obj.sold_quantity,
    });
}

export default Item;
