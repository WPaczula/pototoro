import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

function App() {
  const onClick = (e: React.MouseEvent) => {
    console.log('halo');
  }

  return (
    <div className={styles['app']}>
      <Button onClick={onClick}>Start</Button>
    </div>
  );
}

export default App;
