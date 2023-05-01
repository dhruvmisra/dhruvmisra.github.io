import { useEffect, useState } from "preact/hooks";
import { Theme } from "@/types/common";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(Theme[(localStorage.getItem("theme") ?? "light") as keyof typeof Theme]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (theme === Theme.dark) {
            document.documentElement.classList.add(Theme.dark);
        } else {
            document.documentElement.classList.remove(Theme.dark);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleChange = () => {
        setTheme(theme === Theme.light ? Theme.dark : Theme.light);
    };

    return (
        <div>
            <input type="checkbox" id="theme-toggle" checked={theme === Theme.dark} onChange={handleChange} />
            <label htmlFor="theme-toggle" className={`toggle ${isMounted ? "" : "invisible"}`}>
                {isMounted && (
                    <>
                        <span className="toggle-switch">
                            <span className="crater crater--1"></span>
                            <span className="crater crater--2"></span>
                            <span className="crater crater--3"></span>
                        </span>
                        <span className="star star--1"></span>
                        <span className="star star--2"></span>
                        <span className="star star--3"></span>
                        <span className="star star--4"></span>
                        <span className="star star--5"></span>
                        <span className="star star--6"></span>
                    </>
                )}
            </label>
        </div>
    );
};

export default ThemeToggle;
