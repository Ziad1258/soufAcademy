import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { useTheme } from "../../hooks/useTheme";

function ThemeSwitcher() {
    const {mood , setMood} = useTheme();
 

    

    return (
        <div className="flex items-center px-4" >
            <span className="text-2xl text-secondary dark:text-darksecondary  cursor-pointer p-1 rounded-lg border dark:border-close-btn-bg"  onClick={() => setMood((prev) => prev === "light" ? "dark" : "light")}>
                {mood === "light" ? <IoIosSunny /> : <IoMoonSharp />}

            </span>
        </div>
    )

}

export default ThemeSwitcher;