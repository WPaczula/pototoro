import * as React from 'react';
import styles from './styles.module.scss';

interface IButtonProps {
    children: React.ReactNode,
    onClick: (event: React.MouseEvent) => void,
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, onClick }) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const localOnClick = (e: React.MouseEvent) => {
      onClick(e);
      ref.current?.blur();
  }


  return <button 
    onClick={localOnClick} 
    className={styles['button']}
    ref={ref}
    >
      {children}
  </button>;
};

export default Button;
