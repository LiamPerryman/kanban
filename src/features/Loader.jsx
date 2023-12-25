function Loader() {
  return (
    <div className="flex gap-4">
      <div className=" h-16 w-2 bg-mainPurple rounded-sm animate-[kanbanLoader_1.5s_.2s_ease-in-out_infinite]"></div>
      <div className=" h-16 w-2 bg-mainPurple rounded-sm animate-[kanbanLoader_1.5s_.4s_ease-in-out_infinite]"></div>
      <div className=" h-16 w-2 bg-mainPurple rounded-sm animate-[kanbanLoader_1.5s_.6s_ease-in-out_infinite]"></div>
    </div>
  );
}

export default Loader;
