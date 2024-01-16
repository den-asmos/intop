import { next } from '../assets';

const NextButton = ({ height = '12px', width = '12px', onClick, styles }) => {
  return (
    <button onClick={onClick} className={styles}>
      <img src={next} alt="next icon" height={height} width={width} className=" active:translate-x-2 duration-200 ease-in" />
    </button>
  );
};

export default NextButton;
