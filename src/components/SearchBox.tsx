import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';

import Item from 'models/dataModel';
import styles from 'styles/views/searchBox.module.css';
type PropTypes = {
  setter: React.Dispatch<React.SetStateAction<Item[]>>;
};

const SearchBox = ({ setter }: PropTypes): JSX.Element => {
  const [searchWord, setSearchWord] = useState<string>('');

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const AvailableData = () => {
    const searchedWord = searchWord.trim().toLocaleLowerCase();
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${searchedWord}`;
    const { data, error } = useSWR(apiUrl, fetcher);
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    const processedItems = data.results.map((item: Item) =>
      Item.fromJson(item),
    );
    setter(processedItems);

    console.log(data.results);
    console.log(processedItems);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  return (
    <>
      <div className={styles.searchBox}>
        <input
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          placeholder="Nunca dejes de buscar"
          spellCheck="false"
          type="text"
          maxLength={150}
          value={searchWord}
          onChange={handleChange}
        />
        <button type="submit">
          <Image
            src="/images/search.png"
            height={16}
            width={16}
            className={styles.magnifyingGlass}
          />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
