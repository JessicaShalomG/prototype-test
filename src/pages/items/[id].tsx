import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import ItemDetailView from 'views/ItemDetailView';

const GetSelectedItem = (): JSX.Element => {
  const { query } = useRouter();

  useEffect(() => {}, [query]);

  return <ItemDetailView queryId={query.id as string} />;
};

export default GetSelectedItem;
