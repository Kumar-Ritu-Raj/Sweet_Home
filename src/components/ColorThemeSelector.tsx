import React, { useEffect, useState } from "react";
import "./AddApartmentForm.scss";

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

  return (
    <div className="theme-selector">
      <span>Select Color Theme:</span>
      <div>
        <label>
          <input
            type="radio"
            value="set-one"
            checked={selectedTheme === "set-one"}
            onChange={handleThemeChange}
          />
          Theme 1
        </label>
        <label>
          <input
            type="radio"
            value="set-two"
            checked={selectedTheme === "set-two"}
            onChange={handleThemeChange}
          />
          Theme 2
        </label>
        <label>
          <input
            type="radio"
            value="set-three"
            checked={selectedTheme === "set-three"}
            onChange={handleThemeChange}
          />
          Theme 3
        </label>
        <label>
          <input
            type="radio"
            value="set-four"
            checked={selectedTheme === "set-four"}
            onChange={handleThemeChange}
          />
          Theme 4
        </label>
      </div>
    </div>
  );
};

export default ColorThemeSelector;
