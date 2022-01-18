import { useMemo } from 'react';
import clsx from "clsx";

import { ReactComponent as Moon } from "./SVG/Moon.svg";
import { ReactComponent as Sun } from "./SVG/Sun.svg";
import { ReactComponent as ToggleBar } from "./SVG/ToggleBar.svg";
import { ReactComponent as Toggle } from "./SVG/ToggleButton.svg";

import "./styles.scss";

type ToggleButtonTypes = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  currentTheme: string;
};

export const ToggleButton = ({ onClick, currentTheme }: ToggleButtonTypes) => {
  const isDark = currentTheme === "dark";

  const linkColor = useMemo(() => {
    return getComputedStyle(document.body).getPropertyValue(
      `--link-color-${currentTheme}`
    );
  }, [currentTheme]);

  const secondaryColor = isDark ? '#4666ab' : 'white';

  return (
    <button className="toggle-button" onClick={onClick}>
      <Toggle
        fill={secondaryColor}
        className={clsx(
          "toggle-button-toggle",
          {
            "toggle-button-toggle-dark": isDark,
          },
          {
            "toggle-button-toggle-light": !isDark,
          }
        )}
      />
      <ToggleBar fill={linkColor} className="toggle-button-bar" />
      {!isDark && <Moon fill={secondaryColor} className="toggle-button-moon" />}
      {isDark && <Sun fill={secondaryColor} className="toggle-button-sun" />}
    </button>
  );
};
