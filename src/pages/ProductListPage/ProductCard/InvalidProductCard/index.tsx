import { QuestionIcon } from '@src/assets';

import style from './style.module.css';

const InvalidProductCard = () => {
  return (
    <li className="product-card">
      <div className={style.contents}>
        <div className={`product-card__image ${style.iconWrapper}`}>
          <img className={style.icon} src={QuestionIcon} alt="알 수 없는 상품" />
        </div>
        <p className={style.message}>상품 정보가 없어요.</p>
      </div>
    </li>
  );
};

export default InvalidProductCard;
