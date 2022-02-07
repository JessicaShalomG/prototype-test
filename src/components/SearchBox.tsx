import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';

import { cleanWord } from 'helperFunctions/helpers';
import { useAppDispatch, useAppSelector } from 'hooks';
import Item from 'models/dataModel';
import { persistFilteredItems, persistSearchedWord } from 'reducers/session';
import { selectTriggerSearch, selectWord } from 'selectors';
import styles from 'styles/components/searchBox.module.css';

const SearchBox = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchWordRef = useRef<HTMLInputElement>(null);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const triggerSerach = useAppSelector<boolean>(selectTriggerSearch);
  const word = useAppSelector<string>(selectWord);

  useEffect(() => {
    setShouldFetch(triggerSerach);
  }, [triggerSerach]);

  const fetcher = (url: string) =>
    axios.get(url).then((res: any) => {
      const resp = res.data;
      const processedItems = resp.results.map((item: any) =>
        Item.fromJson(item),
      );
      const firstFourItems = processedItems.slice(0, 4);
      dispatch(persistFilteredItems(firstFourItems));
    });

  const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${word}`;
  useSWRImmutable(shouldFetch ? apiUrl : null, fetcher);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    searchUpdate();
    const word = searchWordRef.current!.value;
    router.push(`/items?search=${cleanWord(word)}`);
  };

  const searchUpdate = useCallback(() => {
    const rawWord = searchWordRef.current!.value;
    dispatch(persistSearchedWord(cleanWord(rawWord)));
  }, [dispatch, searchWordRef]);

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
      <button type="submit" onClick={handleClick}>
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
