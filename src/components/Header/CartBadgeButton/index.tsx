import { CartIcon } from '@assets/index';
import CartListModal from '@components/CartListModal';
import { useOpenModal } from '@hooks/index';
import { lazy } from 'react';

const CartQuantity = lazy(() => import('../CartQuantity'));

import style from './style.module.css';

const CartBadgeButton = () => {
  const { isModalOpen, openModal, closeModal, rootEl } = useOpenModal();

  return (
    <>
      <button type="button" className={style.button} onClick={openModal}>
        <img src={CartIcon} alt="장바구니 아이콘(장바구니 목록 열기)" />
        <CartQuantity />
      </button>
      {isModalOpen && <CartListModal isModalOpen={isModalOpen} closeModal={closeModal} rootEl={rootEl} />}
    </>
  );
};

export default CartBadgeButton;
