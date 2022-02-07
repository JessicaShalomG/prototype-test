import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ItemBox from 'components/ItemBox';
import { maxCategoriesType } from 'helperFunctions/helpers';
import { useAppSelector } from 'hooks';
import Item from 'models/dataModel';
import { selectCategories, selectItems } from 'selectors';
import style from 'styles/views/searchedResults.module.css';

const SearchedResults = () => {
  const filteredItems = useAppSelector(selectItems);
  const categories = useAppSelector(selectCategories);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    const categoryId = maxCategoriesType(categories);
    const url = `https://api.mercadolibre.com/categories/${categoryId}`;
    const getCategoryName = async () => {
      const { data } = await axios.get(url);
      setCategoryName(data.name);
    };
    if (categoryId) getCategoryName();
  }, [categories]);

  const items = filteredItems.map((item: any, index: number) => {
    const formatedItem: Item = Item.fromJson(item);
    const { name } = formatedItem.sellerAddress;
    const { amount } = formatedItem.price;
    return (
      <div className={style.itemContainer} key={formatedItem.id}>
        <ItemBox
          address={name}
          freeShipping={formatedItem.shipping}
          id={formatedItem.id}
          imageUrl={formatedItem.picture}
          price={amount}
          title={formatedItem.title}
        />
        {index < filteredItems.length - 1 && <hr className={style.line} />}
      </div>
    );
  });

  return (
    <div className={style.mainContainer}>
      <p className={style.categoryName}>{categoryName}</p>
      <div className={style.subcontainer}>{items}</div>
    </div>
  );
};

export default SearchedResults;
