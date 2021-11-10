import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  primary: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { text, primary } = props;
  return (
    <button
      type="button"
      className={`button ${primary ? 'primary' : 'default'}`}
    >
      {text}
    </button>
  );
};

export default Button;
