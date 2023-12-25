function MenuButton({ clicked, setClicked }) {
  return (
    <div
      onClick={() => setClicked((clicked) => !clicked)}
      className="flex flex-col gap-[7px] justify-center items-center h-12 w-12 p-1  group hover:cursor-pointer"
    >
      <div
        className={`h-[3px] w-2/3 bg-mediumGrey rounded-2xl  ${
          clicked && "rotate-45  duration-200 translate-y-[10px]"
        } `}
      ></div>
      <div
        className={`h-[3px] w-2/3 bg-mediumGrey rounded-2xl ${clicked && "opacity-0"} duration-200`}
      ></div>
      <div
        className={`h-[3px] w-2/3 bg-mediumGrey rounded-2xl  ${
          clicked && "-rotate-45  duration-200 -translate-y-[10px]"
        } `}
      ></div>
    </div>
  );
}

export default MenuButton;
