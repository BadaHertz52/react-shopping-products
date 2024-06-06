import { useEffect, useState } from 'react';

interface UseModalOpenParams {
  isOpenModal: boolean;
}

const useOpenModal = ({ isOpenModal }: UseModalOpenParams) => {
  const [openModal, setOpenModal] = useState(isOpenModal);
  const rootEl = document.getElementById('root');

  useEffect(() => {
    setOpenModal(isOpenModal);
  }, [isOpenModal]);

  return { openModal, setOpenModal, rootEl };
};

export default useOpenModal;
