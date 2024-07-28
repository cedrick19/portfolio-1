const BannerLayout = ({ children }) => {
  return (
    <div className="relative  w-full h-80 bg-fixed z-10">
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t dark:from-MidNightBlack">
        <div className="dark:bg-Black/5 w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default BannerLayout;
