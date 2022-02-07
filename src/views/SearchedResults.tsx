import React from 'react';

import ItemBox from 'components/ItemBox';
import { useAppSelector } from 'hooks';
import { selectItems } from 'selectors';
import style from 'styles/views/searchedResults.module.css';

const SearchedResults = () => {
  const FilteredItems = useAppSelector(selectItems);

  const items = FilteredItems.map((item, index) => {
    const {
      state: { name },
    } = item.sellerAddress;

    return (
      <div className={style.itemContainer} key={item.id}>
        <ItemBox
          address={name}
          freeShipping={item.shipping}
          id={item.id}
          imageUrl={item.thumbnail}
          price={item.price}
          title={item.title}
        />
        {index < FilteredItems.length - 1 && <hr className={style.line} />}
      </div>
    );
  });

  return (
    <div className={style.mainContainer}>
      <div className={style.subcontainer}>{items}</div>
    </div>
  );
};

export default SearchedResults;

//MLA1055
