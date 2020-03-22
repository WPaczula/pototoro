import * as React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface ITimeInputProps {
	initialValue?: number;
	onChange: (minutes: number) => void;
	className?: string;
	['data-testid']?: string;
}

const TimeInput: React.FunctionComponent<ITimeInputProps> = ({
	initialValue = 0,
	onChange,
	className,
	['data-testid']: testId
}) => {
	const [value, setValue] = React.useState<number>(initialValue);

	const localOnChange = React.useCallback(
		(event: React.FormEvent<HTMLInputElement>) => {
			const minutes =
				event.currentTarget.value !== ''
					? Number(event.currentTarget.value)
					: 0;
			setValue(minutes);
			onChange(minutes);
		},
		[setValue, onChange]
	);

	return (
		<input
			data-testid={testId}
			className={classNames(styles['input'], className)}
			type="number"
			min="0"
			max="60"
			value={value.toString()}
			onChange={localOnChange}
		/>
	);
};

export default TimeInput;
