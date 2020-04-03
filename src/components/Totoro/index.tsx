import * as React from 'react';
import classNames from 'classnames';
import Work from './images/work.gif';
import Break from './images/break.gif';
import LongBreak from './images/long-break.gif';
import styles from './styles.module.scss';

/* eslint-disable no-unused-vars */
export enum TotoroState {
	Work,
	Break,
	LongBreak
}
/* eslint-enable no-unused-vars */

interface ITotoroProps {
	hidden: boolean;
	state: TotoroState;
}

const getImage = (state: TotoroState): string => {
	switch (state) {
		case TotoroState.Break:
			return Break;
		case TotoroState.LongBreak:
			return LongBreak;
		case TotoroState.Work:
			return Work;
	}
};

const Totoro: React.FunctionComponent<ITotoroProps> = ({ hidden, state }) => {
	const [changing, setChanging] = React.useState<boolean>(false);
	const [debouncedState, setDebouncedState] = React.useState<TotoroState>(
		state
	);

	React.useEffect(() => {
		setChanging(true);

		const stateInterval = setTimeout(() => {
			setDebouncedState(state);
		}, 300);

		const changeInterval = setTimeout(() => {
			setChanging(false);
		}, 1000);

		return () => {
			clearInterval(stateInterval);
			clearInterval(changeInterval);
		};
	}, [state]);

	return (
		<img
			className={classNames(styles['totoro'], {
				[styles['totoro--hidden']]: hidden,
				[styles['totoro--changing']]: changing,
				[styles['totoro--work']]: debouncedState === TotoroState.Work,
				[styles['totoro--break']]: debouncedState === TotoroState.Break,
				[styles['totoro--long-break']]: debouncedState === TotoroState.LongBreak
			})}
			src={getImage(debouncedState)}
		/>
	);
};

export default Totoro;
