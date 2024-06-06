import CartBadgeButton from './CartBadgeButton';
import Logo from './Logo';
import style from './style.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <Logo />
        <CartBadgeButton />
      </header>
    </>
  );
};

export default Header;
