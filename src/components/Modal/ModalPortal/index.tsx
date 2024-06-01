import { ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import style from './style.module.css';

export interface ModalPortalProps {
  children: ReactNode;
}

export default function ModalPortal(props: ModalPortalProps) {
  const { children } = props;
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const stopModalPropagation = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
  };

  const createModalRoot = () => {
    if (document.getElementById('modal-root')) return;

    const body = document.body;
    const $modalRoot = document.createElement('div');
    $modalRoot.id = 'modal-root';
    body.appendChild($modalRoot);
    setModalRoot($modalRoot);
  };

  useLayoutEffect(() => {
    createModalRoot();
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', stopModalPropagation);
    return () => {
      document.body.removeEventListener('click', stopModalPropagation);
      if (modalRoot) document.body.removeChild(modalRoot);
    };
  }, [modalRoot]);

  return createPortal(<div className={style.modalPortal}>{children}</div>, modalRoot || document.body, 'modal-portal');
}
