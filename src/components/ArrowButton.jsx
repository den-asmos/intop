import { next } from '../assets';

const ArrowButton = ({ styles, onClick }) => {
  return (
    <button onClick={onClick} className={`p-2 flex justify-center items-center bg-white shadow-md rounded-full ${styles}`}>
      <img src={next} alt="arrow icon" className="w-4 h-4 active:translate-x-2 duration-200 ease-in" />
    </button>
  );
};

export default ArrowButton;
