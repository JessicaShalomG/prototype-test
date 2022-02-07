import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

import ItemDetail from 'components/ItemDetail';
import ItemDetailModel from 'models/itemDetailModel';
import style from 'styles/pages/items.module.css';

const ItemDetailView = ({ queryId }: { queryId: string }): JSX.Element => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [product, setProduct] = useState<ItemDetailModel>();

  useEffect(() => {
    if (queryId) {
      setShouldFetch(true);
    }
  }, [queryId, product]);

  const apiUrl = `https://api.mercadolibre.com/items/${queryId}`;
  const detailUrl = `https://api.mercadolibre.com/items/${queryId}/description`;

  const fetcher = (url: string) => {
    axios.get(url, { parseItem: true }).then((response: any) => {
      let resp = ItemDetailModel.fromJson(response.item);
      axios.get(detailUrl).then((response2: any) => {
        const { plain_text } = response2.data;
        resp.description = plain_text;
        setProduct(resp);
      });
    });
  };

  const { error } = useSWRImmutable(shouldFetch ? apiUrl : null, fetcher);

  if (error) {
    return (
      <div className={style.error}>
        <h1>Algo salio mal con este articulo, intenta de nuevo</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={style.error}>
        <h1>....Loading.....</h1>
      </div>
    );
  }

  return (
    <div className={style.mainContainer}>
      <ItemDetail
        condition={product.condition}
        description={product.description}
        price={product.price}
        sold={product.sold}
        imageUrl={product.picture}
        title={product.title}
      />
    </div>
  );
};

export default ItemDetailView;
