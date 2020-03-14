import React from 'react';
import Timer from '../Timer';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <Timer />
    </div>
  );
}

export default App;
