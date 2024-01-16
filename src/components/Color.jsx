const Color = ({ color, onClick, isSelected }) => {
  const bgColor = `rgb(${color.r},${color.g},${color.b})`;

  return (
    <div className={`p-1 rounded-full flex justify-center items-center ${isSelected ? 'isSelected' : 'notSelected'}`}>
      <button onClick={onClick} className={`rounded-full h-3 w-3 bg-[${bgColor}]`} style={{ background: bgColor }}></button>
    </div>
  );
};

export default Color;
