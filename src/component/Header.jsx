import { useState } from "react";
import HubIcon from "../assets/github-icon.png";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const Header = () => {
    const [isLight, setIsLight] = useState(true);
    return (
        <header className="flex justify-between items-center  py-2 rounded-md gap-2">
            <div className="flex items-center gap-4 select-none">
                <div className="p-[2px] bg-[#213547] shadow-lg rounded-md">
                    <img
                        className="w-10 shadow-lg"
                        src={HubIcon}
                        alt="Github icon"
                    />
                </div>
                <h1 className="text-3xl font-extrabold">OtherMe V2</h1>
            </div>

            <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsLight(!isLight)}
            >
                {isLight ? (
                    <>
                        <p className="font-bold">Light</p>
                        <img src={Sun} alt="Dark theme icon" />
                    </>
                ) : (
                    <>
                        <p className="font-bold">Dark</p>
                        <img src={Moon} alt="Dark theme icon" />
                    </>
                )}
            </button>
        </header>
    );
};

export default Header;
