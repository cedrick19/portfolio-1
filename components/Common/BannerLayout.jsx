const BannerLayout = ({ children }) => {
  return (
    <div className="relative w-full bg-fixed z-10">
      <div className="relative z-20 flex flex-col items-center w-full bg-gradient-to-t from-gray-50 dark:from-MidNightBlack">
        <div className="bg-Black/[0.02] dark:bg-Black/5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default BannerLayout;
