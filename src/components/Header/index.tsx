import { CartActionErrorModal } from '../Modal';

import CartBadgeButton from './CartBadgeButton';
import Logo from './Logo';
import style from './style.module.css';

interface HeaderProps {
  cartItemsLength: number;
  cartItemsFetchError: boolean;
}

function Header({ cartItemsLength, cartItemsFetchError }: HeaderProps) {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <CartBadgeButton cartItemsLength={cartItemsLength} />
        <CartActionErrorModal error={cartItemsFetchError} />
      </header>
    </>
  );
}

export default Header;
