import { CartIcon } from '@assets/index';
import CartListModal from '@components/CartListModal';
import { useOpenModal } from '@hooks/index';
import { lazy } from 'react';

const CartQuantity = lazy(() => import('../CartQuantity'));

import style from './style.module.css';

const CartBadgeButton = () => {
  const { openModal, setOpenModal, rootEl } = useOpenModal({ isOpenModal: false });

  const handleClickButton = () => {
    setOpenModal(true);
  };

  return (
    <>
      <button type="button" className={style.button} onClick={handleClickButton}>
        <img src={CartIcon} alt="장바구니 아이콘(장바구니 목록 열기)" />
        <CartQuantity />
      </button>
      {openModal && <CartListModal openModal={openModal} setOpenModal={setOpenModal} rootEl={rootEl} />}
    </>
  );
};

export default CartBadgeButton;
