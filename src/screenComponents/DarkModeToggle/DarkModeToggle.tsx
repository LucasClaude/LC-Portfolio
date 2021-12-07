import { useContext, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { MainContext } from "../../context/MainContext";

export const DarkModeToggle = () => {
  const {
    state: { theme },
    dispatch,
  } = useContext(MainContext);

  const isDark = theme ? theme === "dark" ? true : false : undefined;

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark: boolean) => setTheme(isSystemDark)
  );

  const setTheme = (isSystemDark: boolean) => {
    dispatch({
      type: "UPDATE_THEME",
      payload: isSystemDark ? "dark" : "light",
    });
  };

    useEffect(() => {
    if (systemPrefersDark)  {
      setTheme(true);
    }
  },[systemPrefersDark]);


  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return (
    <button className="toggle-button" onClick={() => setTheme(!isDark)}>
      {isDark ? "Light" : "Dark"} Mode
    </button>
  );
};
