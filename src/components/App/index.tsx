import React from 'react';
import Timer from 'components/Timer';
import styles from './styles.module.scss';

function App() {
	return (
		<div className={styles['app']}>
			<Timer />
		</div>
	);
}

export default App;
