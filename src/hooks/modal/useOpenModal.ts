import { useState } from 'react';

interface UseOpenModalProps {
  isModalOpenState?: boolean;
}
const useOpenModal = (props: UseOpenModalProps = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isModalOpenState ?? false);
  const rootEl = document.getElementById('root');

  return { isModalOpen, openModal: () => setIsModalOpen(true), closeModal: () => setIsModalOpen(false), rootEl };
};

export default useOpenModal;
