const CustomButton = ({ children, onClick, width, styles, type = 'button', disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`p-1 rounded-2xl enabled:active:scale-90 duration-200 ease-in-out ${styles} disabled:opacity-75`}
      onClick={onClick}
      style={{ width }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
