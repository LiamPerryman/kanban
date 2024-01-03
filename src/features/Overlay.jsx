function Overlay({ children, clicked, setClicked }) {
  return (
    <>
      {!clicked && (
        <div
          onClick={() => setClicked(true)}
          className="fixed inset-0 h-screen w-screen z-50 bg-black/30 flex flex-col justify-center items-center"
        >
          {children}
        </div>
      )}
    </>
  );
}

export default Overlay;
