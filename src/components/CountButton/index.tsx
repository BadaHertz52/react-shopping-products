import { MinusIcon, PlusIcon } from '@assets/index';
import React from 'react';

import style from './style.module.css';

const QUANTITY_SIGN = {
  minus: {
    src: MinusIcon,
    label: '수량 감소',
  },
  plus: {
    src: PlusIcon,
    label: '수량 증가',
  },
};

type QuantitySign = keyof typeof QUANTITY_SIGN;

const CountButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { quantitySign: QuantitySign }> = ({
  quantitySign,
  onClick,
  ...rest
}) => {
  const { src, label } = QUANTITY_SIGN[quantitySign];

  return (
    <button {...rest} className={style.countButton} name={label} onClick={onClick}>
      <img src={src} alt={label} />
    </button>
  );
};

export default CountButton;
