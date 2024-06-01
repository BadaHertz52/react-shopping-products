import ModalPortal from '../ModalPortal';

import useToastModalAnimation from './hooks/useToastModalAnimation';
import style from './style.module.css';

interface ToastModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  position: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  isOpen: boolean;
  closeModal: () => void;
}

const ToastModal = ({ children, position, isOpen, closeModal, ...rest }: ToastModalProps) => {
  const { isOn } = useToastModalAnimation({ closeModal, isOpen });

  const className = `${style.toastModal} ${isOn ? style.on : ''}`;

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <div {...rest} className={className} style={position}>
            {children}
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default ToastModal;
