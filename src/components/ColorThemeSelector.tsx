import React, { useEffect, useState } from "react";
import "./ApartmentDetails.scss";

const ColorThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "set-one";
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(event.target.value);
  };

  const themes = [
  { value: "set-one", label: "Theme 1" },
  { value: "set-two", label: "Theme 2" },
  { value: "set-three", label: "Theme 3" },
  { value: "set-four", label: "Theme 4" },
  { value: "set-five", label: "Theme 5" },
  { value: "set-six", label: "Theme 6" },
  { value: "set-seven", label: "Theme 7" },
  { value: "set-eight", label: "Theme 8" },
  { value: "set-nine", label: "Theme 9" },
];

  return (
    <div className="theme-selector">
    <span>Select Color Theme:</span>
    <div className="themes">
      {themes.map((theme) => (
        <label key={theme.value}>
          <input
            type="radio"
            value={theme.value}
            checked={selectedTheme === theme.value}
            onChange={handleThemeChange}
          />
          {theme.label}
        </label>
      ))}
    </div>
  </div>
  );
};

export default ColorThemeSelector;
