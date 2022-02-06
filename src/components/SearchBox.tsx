import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import useSWR from 'swr';

import { useAppDispatch, useAppSelector } from 'hooks';
import Item from 'models/dataModel';
import { persistFilteredItems, persistSearchedWord } from 'reducers/session';
import { selectWord } from 'selectors';
import styles from 'styles/components/searchBox.module.css';

const SearchBox = (): JSX.Element => {
  const searchWordRef = useRef<HTMLInputElement>(null);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const word = useAppSelector<string>(selectWord);

  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      const resp = res.data;
      const processedItems = resp.results.map((item: Item) =>
        Item.fromJson(item),
      );
      const firstFourItems = processedItems.slice(0, 4);
      dispatch(persistFilteredItems(firstFourItems));
    });

  const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${word}`;
  useSWR(shouldFetch ? apiUrl : null, fetcher);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchUpdate();
    setShouldFetch(true);
  };

  const searchUpdate = useCallback(() => {
    const rawWord = searchWordRef.current!.value;
    const cleanedWord = rawWord.trim().toLocaleLowerCase();
    dispatch(persistSearchedWord(cleanedWord));
  }, [searchWordRef, dispatch]);

  return (
    <div className={styles.searchBox}>
      <input
        ref={searchWordRef}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        placeholder="Nunca dejes de buscar"
        spellCheck="false"
        type="text"
        maxLength={150}
        defaultValue={word}
      />
      <button type="submit" onClick={handleSubmit}>
        <Image
          src="/images/search.png"
          height={16}
          width={16}
          className={styles.magnifyingGlass}
          alt={'search icon'}
        />
      </button>
    </div>
  );
};

export default SearchBox;
