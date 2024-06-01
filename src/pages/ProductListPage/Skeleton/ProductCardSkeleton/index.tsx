import style from './style.module.css';

const ProductCardSkeleton = () => {
  return (
    <li className="product-card">
      <div className={`product-card__image skeleton ${style.img}`} />
      <div className={`product-card__contents ${style.contents}`}>
        <p className={`skeleton ${style.row}`}></p>
        <p className={`skeleton ${style.row}`}></p>
        <div className={`skeleton cart-action-button ${style.button}`}></div>
      </div>
    </li>
  );
};

export default ProductCardSkeleton;
