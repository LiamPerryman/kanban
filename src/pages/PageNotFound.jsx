function PageNotFound() {
  return (
    <div className="h-screen flex  justify-center items-center pattern-graph-mediumGrey/10 pattern-topography-scale-[.3]">
      <header className="flex flex-row text-4xl gap-5">
        <h1 className="text-mainPurple">Page Not Found</h1>
        <span>😢</span>
      </header>
    </div>
  );
}

export default PageNotFound;
