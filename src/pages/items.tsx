import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch } from 'hooks';
import { persistSearchedWord, persistTriggerSearch } from 'reducers/session';
import SearchedResults from 'views/SearchedResults';
import style from 'styles/pages/items.module.css';

const Items = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { search } = router.query;
      dispatch(persistSearchedWord(search as string));
      dispatch(persistTriggerSearch(true));
    }
  }, [dispatch, router.isReady, router.query]);

  return (
    <div className={style.mainContainer}>
      <SearchedResults />
    </div>
  );
};

export default Items;
