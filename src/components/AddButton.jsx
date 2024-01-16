import { addIcon } from '../assets';

const AddButton = ({ styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 flex justify-center items-center bg-[var(--color-green)] shadow-md rounded-full active:scale-90 duration-75 ease-in ${styles}`}
    >
      <img src={addIcon} alt="arrow icon" width={16} height={16} className="invert" />
    </button>
  );
};

export default AddButton;
