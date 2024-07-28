import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Sun from ".././public/projects/sun.svg";
import Moon from ".././public/projects/moon.svg";

export default function Switcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="items-center  justify-center absolute bottom-0 w-full mx-12 lg:mx-0">
      <div>
        <div className="p-2 rounded-xl">
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black "
              onClick={() => setTheme("light")}
            >
              {" "}
              <Image src={Sun} alt="logo" className="w-20 h-15 " />
            </button>
          ) : (
            <button
              className="bg-gray-100 p-2 rounded-xl"
              onClick={() => setTheme("dark")}
            >
              <Image src={Moon} alt="logo" className="w-20 h-15 " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
