function Button({ onClick, text, size, type }) {
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
      className={`${buttonColor}  rounded-full w-full text-center ${buttonSize}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
