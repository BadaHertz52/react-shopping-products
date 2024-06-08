import { AlertModal } from 'badahertz52-react-modules-components';

import style from './style.module.css';

interface QuantityLimitModalProps {
  rootEl: HTMLElement | null;
  isModalOpen: boolean;
  closeModal: () => void;
}
const QuantityLimitModal = ({ rootEl, isModalOpen, closeModal }: QuantityLimitModalProps) => {
  return (
    <AlertModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      modalTargetEl={rootEl}
      contents={<p className={style.message}>상품은 최대 100개까지 구매가능해요.</p>}
      button={<button className={style.confirmButton}>확인</button>}
    />
  );
};

export default QuantityLimitModal;
