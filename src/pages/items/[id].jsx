import React from 'react';
import { useRouter } from 'next/router';

const GetSelectedItem = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h2>pathname:- {router.pathname}</h2>
      <h2>asPath:- {router.asPath}</h2>
    </div>
  );
};

export default GetSelectedItem;
