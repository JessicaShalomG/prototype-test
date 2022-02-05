import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import SearchBox from 'components/SearchBox';
import SearchedResults from 'components/SearchedResults';
import Item from 'models/dataModel';
import styles from 'styles/views/searchBox.module.css';

const SearchView = (): JSX.Element => {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  return (
    <div className={styles.mainBox}>
      <Image
        priority
        src="/images/logo.png"
        className={styles.borderCircle}
        height={20}
        width={35}
        alt={'Mercado Libre Logo'}
      />
      <SearchBox setter={setFilteredItems} />
      <SearchedResults results={filteredItems} />
    </div>
  );
};

export default SearchView;
