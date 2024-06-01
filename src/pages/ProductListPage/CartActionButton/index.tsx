import AddIcon from '@assets/addCart.svg';
import DeleteIcon from '@assets/deleteCart.svg';
import React from 'react';

import style from './style.module.css';

type ButtonType = 'add' | 'delete';

interface CartActionButtonProps {
  buttonType: ButtonType;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonInfo {
  src: string;
  alt: string;
  text: string;
}

const BUTTON_INFO: Record<ButtonType, ButtonInfo> = {
  add: {
    src: AddIcon,
    alt: '상품 담기',
    text: '담기',
  },
  delete: {
    src: DeleteIcon,
    alt: '상품 빼기',
    text: '빼기',
  },
};

function CartActionButton({ buttonType, onClick }: CartActionButtonProps) {
  const { src, alt, text } = BUTTON_INFO[buttonType];
  const className = `cart-action-button ${style.button} ${style[buttonType]}`;

  return (
    <button onClick={onClick} className={className}>
      <img src={src} alt={alt} />
      <span className="button__text">{text}</span>
    </button>
  );
}

export default CartActionButton;
