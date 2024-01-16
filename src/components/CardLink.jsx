import NextButton from './NextButton';

const CardLink = ({
  icon,
  iconStyles,
  color,
  title,
  textColor = 'text-white',
  fontSize = '14px',
  height = '50px',
  width = '95%',
  justifyCenter = false,
  nextBtn,
  invert = true,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative  p-4 rounded-2xl flex ${image ? 'flex-col text-center' : ''} ${
        !justifyCenter ? 'justify-between' : 'justify-center'
      } items-center ${color}  active:opacity-75 duration-75 ease-out}`}
      style={{ height, width }}
    >
      <div className="flex items-center gap-2">
        {icon && <img src={icon} alt={title} height={14} width={14} className={iconStyles} />}
        <h2 className={`${textColor} text-[${fontSize}]`}>{title}</h2>
      </div>

      {nextBtn && <NextButton styles={`${invert ? 'invert' : ''} ml-1`} width={14} height={14} onClick={onClick} />}
      {image && (
        <div className="flex justify-start items-end">
          <img src={image} alt={title} className="h-[70px] object-contain" />
        </div>
      )}
    </div>
  );
};

export default CardLink;
