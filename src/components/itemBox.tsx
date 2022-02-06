import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from 'styles/components/itemBox.module.css';

type PropTypes = {
  address: string;
  freeShipping: boolean;
  id: number;
  imageUrl: string;
  price: number;
  title: string;
};
const ItemBox = ({
  address,
  freeShipping,
  id,
  imageUrl,
  price,
  title,
}: PropTypes): JSX.Element => {
  const value: number = price / 100;
  const localValue: string = value.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  });
  const shippingIcon: JSX.Element = (
    <div className={styles.logo}>
      <Image
        src="/images/shipping.png"
        height={20}
        width={20}
        alt={'shipping icon'}
      />
    </div>
  );

  const itemBody: JSX.Element = (
    <div className={styles.subcontainer}>
      <Image src={imageUrl} height={180} width={180} alt={'image product'} />
      <div className={styles.middlecontainer}>
        <div className={styles.amountContainer}>
          <p className={styles.amount}>{localValue}</p>
          {freeShipping && shippingIcon}
        </div>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.LastContainer}>
        <p className={styles.state}>{address}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.mainContainer}>
      <Link href={{ pathname: `/items/${id}` }}>{itemBody}</Link>
    </div>
  );
};

export default ItemBox;
