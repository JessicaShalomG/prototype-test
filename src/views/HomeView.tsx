import Image from 'next/image';

import SearchBox from 'components/SearchBox';
import styles from 'styles/views/homeView.module.css';

const HomeView = (): JSX.Element => {
  return (
    <div className={styles.homeViewCointer}>
      <div className={styles.subcontainer}>
        <Image
          priority
          src="/images/logo.png"
          height={40}
          width={60}
          alt={'Mercado Libre Logo'}
        />
        <SearchBox />
      </div>
    </div>
  );
};
export default HomeView;
