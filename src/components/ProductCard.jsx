import CustomButton from './CustomButton';
import LikeButton from './LikeButton';

const ProductCard = ({ image, title, price, currency, language }) => {
  return (
    <div className="relative w-[150px] flex flex-col justify-center items-start bg-[var(--color-gray)] rounded-2xl font-light shadow-sm">
      <LikeButton styles="absolute top-2 right-2" />
      <img src={image} alt={title} className="h-[150px] object-cover rounded-2xl self-center" />
      <div className="my-2 px-3 flex flex-col justify-center items-start text-[12px] leading-4 gap-2">
        <h3 className="max-w-[130px] text-sm leading-4 break-words text-wrap">{title}</h3>
        <p className="font-normal">
          {currency}
          {price}
        </p>
      </div>
      <CustomButton styles="mb-2 bg-white text-[11px] self-center" width="90%">
        {language.Buy}
      </CustomButton>
    </div>
  );
};

export default ProductCard;
