import { successIcon } from '../assets';

const Success = () => {
  return (
    <div className="absolute inset-0 bg-black/25 w-full h-full z-10 flex justify-center items-center">
      <div className="z-20 p-4 h-fit w-[80%] bg-white flex flex-col justify-center items-center gap-4 rounded-xl shadow-md">
        <div className="p-2 bg-[var(--color-green)] rounded-full">
          <img src={successIcon} alt="success icon" width={40} height={40} />
        </div>
        <h2 className="font-light">Регистрация завершена</h2>
      </div>
    </div>
  );
};

export default Success;
