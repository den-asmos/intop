const Banner = ({ image, onClick }) => {
  return (
    <div>
      <img src={image} alt="banner" className="width-[85%] object-contain rounded-2xl active:opacity-75 duration-75 ease-out" />
    </div>
  );
};

export default Banner;
