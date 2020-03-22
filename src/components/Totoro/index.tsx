import * as React from 'react';
import classNames from 'classnames';
import Work from './images/work.gif';
import Break from './images/break.gif';
import styles from './styles.module.scss';

/* eslint-disable no-unused-vars */
export enum TotoroState {
	Work,
	Break
}
/* eslint-enable no-unused-vars */

interface ITotoroProps {
	hidden: boolean;
	state: TotoroState;
}

const Totoro: React.FunctionComponent<ITotoroProps> = ({ hidden, state }) => {
	const [changing, setChanging] = React.useState<boolean>(false);
	const [debouncedState, setDebouncedState] = React.useState<TotoroState>(
		state
	);

	React.useEffect(() => {
		setChanging(true);

		setTimeout(() => {
			setDebouncedState(state);
		}, 300);

		setTimeout(() => {
			setChanging(false);
		}, 1000);
	}, [state]);

	return (
		<img
			className={classNames(styles['totoro'], {
				[styles['totoro--hidden']]: hidden,
				[styles['totoro--changing']]: changing
			})}
			src={debouncedState === TotoroState.Work ? Work : Break}
		/>
	);
};

export default Totoro;
