import NextButton from './NextButton';
import { avatar, telegramIcon } from '../assets';

const Navbar = ({ userInfo, language }) => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="flex gap-4">
        <img src={avatar} alt="avatar" width={24} height={24} className="object-contain" />

        <div className="flex flex-col justify-center items-start text-[11px] leading-4 font-light">
          <div className="flex gap-1">
            <h2 className="text-[14px]">{userInfo.first_name}</h2>
            <NextButton />
          </div>
          <p>{userInfo.phone_number ? (userInfo.is_seller ? 'Продавец' : language.Buyer) : 'Гость'}</p>
        </div>
      </div>
      <div className="py-1 px-2 bg-[var(--color-gray)] rounded-3xl flex gap-2">
        <img src={telegramIcon} alt="telegram icon" width={20} height={20} className="object-contain" />

        <div className="flex flex-col justify-center items-start font-light">
          <p className="text-[13px]">@intopmarket</p>
          <p className="text-[8px] text-[var(--color-dark-gray)]">{language['Telegram-channel']}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
