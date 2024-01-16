import { likeIcon } from '../assets';

const LikeButton = ({ width = '12px', height = '12px', styles }) => {
  return (
    <button className={`p-2 flex justify-center items-center bg-white rounded-full shadow-md ${styles}`}>
      <img src={likeIcon} alt="like icon" width={width} height={height} />
    </button>
  );
};

export default LikeButton;
