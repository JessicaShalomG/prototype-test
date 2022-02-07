import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

import ItemDetail from 'components/ItemDetail';
import ItemDetailModel from 'models/itemDetailModel';
import style from 'styles/pages/items.module.css';

const ItemDetailView = ({ queryId }: { queryId: string }): JSX.Element => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  useEffect(() => {
    if (queryId) {
      setShouldFetch(true);
    }
  }, [queryId]);

  const apiUrl = `https://api.mercadolibre.com/items/${queryId}`;

  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      console.log('el fetcher');
      const resp = res.data;
      return ItemDetailModel.fromJson(resp);
    });

  const { data, error } = useSWRImmutable(shouldFetch ? apiUrl : null, fetcher);

  if (error) {
    return (
      <div className={style.error}>
        <h1>Algo salio mal con este articulo, intenta de nuevo</h1>
      </div>
    );
  }
  if (!data) {
    return (
      <div className={style.error}>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className={style.mainContainer}>
      <ItemDetail
        condition={data.condition}
        description={data.warranty}
        price={data.price}
        sold={data.sold}
        imageUrl={data.thumbnail}
        title={data.title}
      />
    </div>
  );
};

export default ItemDetailView;
