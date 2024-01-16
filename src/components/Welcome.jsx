import { successIcon } from '../assets';

const Welcome = () => {
  return (
    <div className="bg-[var(--color-green)] absolute inset-0 h-full w-full z-20 flex flex-col justify-center items-center gap-1 welcome">
      <img src={successIcon} alt="success icon" height={124} width={124} />
      <h2 className="mt-6 text-white text-[22px]">Добро пожаловать в InTop!</h2>
      <p className="text-white text-[11px]">Ваш аккаунт успешно создан</p>
    </div>
  );
};

export default Welcome;
