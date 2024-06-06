import { useOpenModal } from '@src/hooks';
import { AlertModal } from 'badahertz52-react-modules-components';
import { Dispatch, SetStateAction } from 'react';

import style from './style.module.css';

interface QuantityLimitModalProps {
  isTryOverMax: boolean;
  setIsTryOverMax: Dispatch<SetStateAction<boolean>>;
}
const QuantityLimitModal = ({ isTryOverMax, setIsTryOverMax }: QuantityLimitModalProps) => {
  const { rootEl } = useOpenModal({ isOpenModal: isTryOverMax });

  return (
    <AlertModal
      openModal={isTryOverMax}
      setOpenModal={setIsTryOverMax}
      modalTargetEl={rootEl}
      contents={<p className={style.message}>상품은 최대 100개까지 구매가능해요.</p>}
      button={<button className={style.confirmButton}>확인</button>}
    />
  );
};

export default QuantityLimitModal;
