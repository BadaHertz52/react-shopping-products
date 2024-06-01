import style from './style.module.css';

function CartActionError() {
  return (
    <div className={style.cartActionError}>
      <p>오류가 발생했습니다.</p>
      <p>잠시 후 다시 시도해 주세요.</p>
    </div>
  );
}

export default CartActionError;
