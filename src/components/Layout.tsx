import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import HomeView from 'views/HomeView';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <HomeView />
      {children}
    </Provider>
  );
};

export default Layout;
