import React from 'react';
import Image from 'next/image';

import { capitalize, localValue } from 'helperFunctions/helpers';
import styles from 'styles/components/itemDetail.module.css';

type currency = { amount: number };

type Props = {
  condition: string;
  description: string;
  price: currency;
  sold: number;
  imageUrl: string;
  title: string;
};

const ItemDetail = ({
  condition,
  description,
  price,
  sold,
  imageUrl,
  title,
}: Props): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    alert(`You have successfully added ${title} to the shooping car :)`);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.subcontainer}>
        <Image src={imageUrl} height={700} width={680} alt={'Product image'} />
        <div className={styles.descriptionContainer}>
          <h1 className={styles.descriptionTitle}>Descripción del producto</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.subcontainerRight}>
        <p className={styles.text}>{`${capitalize(
          condition,
        )} - ${sold} vendidos`}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.amount}>{localValue(price?.amount / 100)}</p>
        <button className={styles.buyButton} onClick={handleClick}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
