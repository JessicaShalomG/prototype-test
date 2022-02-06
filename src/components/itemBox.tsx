import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PropTypes = {
  id: number;
  imageUrl: string;
  price: number;
  title: string;
};
const ItemBox = ({ id, imageUrl, price, title }: PropTypes): JSX.Element => {
  const value: number = price / 100;
  const localValue: string = value.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
  const itemBody: JSX.Element = (
    <div>
      <Image src={imageUrl} height={180} width={180} alt={'image product'} />
      <h1>{title}</h1>
      <h2>{localValue}</h2>
    </div>
  );

  return (
    <div>
      <Link href={{ pathname: `/items/${id}` }}>{itemBody}</Link>
    </div>
  );
};

export default ItemBox;
