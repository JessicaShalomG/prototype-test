import React from 'react';

import ItemBox from 'components/itemBox';
import { useAppSelector } from 'hooks';
import { selectItems } from 'selectors';
import style from 'styles/views/searchedResults.module.css';

const SearchedResults = () => {
  const FilteredItems = useAppSelector(selectItems);

  const items = FilteredItems.map((item, index) => {
    return (
      <div className={style.subcontainer} key={item.id} >
      <ItemBox
        imageUrl={item.thumbnail}
        price={item.price}
        title={item.title}
        id={item.id}
      />
      {index<FilteredItems.length-1 && <hr className={style.line}/>}
      </div>
    );
  });

  return <div className={style.mainContainer}>{items}</div>;
};

export default SearchedResults;

//MLA1055