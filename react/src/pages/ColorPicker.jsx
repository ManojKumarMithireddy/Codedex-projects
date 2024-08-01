import { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);

  const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Cyan', hex: '#00FFFF' },
    { name: 'Magenta', hex: '#FF00FF' },
  ];

    const handleClick = (color) => {
    setSelectedColor(color);
    }

    const handleMouseEnter = (hex) => {
    const color = colors.find((color) => color.hex === hex);
    setSelectedColor(color);
    }

    const handleMouseLeave = () => {
    setSelectedColor({ hex: null, name: null });
    }

    const handleFocus = (index) => {
    setFocusedIndex(index);
    }   

    const handleBlur = () => {
    setFocusedIndex(null);
    }

    const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
        setSelectedColor(colors[index]);
    }

    if (e.key === 'ArrowDown') {
        if (index < colors.length - 1) {
        setFocusedIndex(index + 1);
        }
    }
    
    if (e.key === 'ArrowUp') {
        if (index > 0) {
        setFocusedIndex(index - 1);
        }
    }

    if (e.key === 'Escape') {
        setFocusedIndex(null);
    }
    }


  return (
    <>
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color)}
            onMouseEnter={() => handleMouseEnter(color.hex)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}>
            {selectedColor.hex === color.hex && (
              <span className="color-code">
                {selectedColor.name || color.hex}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default ColorPicker;