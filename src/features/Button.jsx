function Button({ onClick, text, size, type, children }) {
  const buttonSize =
    size?.toLowerCase() === "lg" ? " h-[3rem] text-headingM" : "h-[2.5rem] font-bold text-sm ";
  const buttonType = type?.toLowerCase();
  const buttonColor =
    buttonType === "secondary"
      ? " bg-mainPurple/10 hover:bg-mainPurple/25 text-mainPurple   "
      : buttonType === "primary"
      ? " bg-mainPurple text-white hover:bg-mainPurpleHover "
      : " text-white hover:bg-redHover bg-red";
  return (
    <button
      className={`${buttonColor}  rounded-full w-full text-center justify-center gap-2 items-center ${buttonSize}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
