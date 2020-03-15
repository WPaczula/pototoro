import * as React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface IInputProps {
    initialValue?: string,
    onChange: (event: React.FormEvent<HTMLInputElement>) => void,
    className?: string, 
}

const Input: React.FunctionComponent<IInputProps> = ({ initialValue = '', onChange, className }) => {
  const [value, setValue] = React.useState<string>(initialValue);

  const localOnChange = React.useCallback((event: React.FormEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
      onChange(event);
  }, 
  [setValue, onChange]);

  return <input 
    className={classnames(styles['input'], className)} 
    value={value} 
    onChange={localOnChange} 
  />;
};

export default Input;
