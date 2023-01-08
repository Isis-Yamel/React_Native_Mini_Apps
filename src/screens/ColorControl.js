import React, { useState } from 'react';
import { View } from 'react-native';
import ColorControler from '../components/colorControler';

const ColorControl = () => {
  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);

  const COLOR_CHANGE = 15;

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        redColor + change > 255 || redColor + change < 0 ? null : setRedColor((prevRed) => prevRed + change)
        break;

      case 'green':
        greenColor + change > 255 || greenColor + change < 0 ? null : setGreenColor((prevGreen) => prevGreen + change)
        break;

      case 'blue':
        blueColor + change > 255 || blueColor + change < 0 ? null : setBlueColor((prevBlue) => prevBlue + change)
        break;

      default:
        break;
    };
  };

  return (
    <View>
      <ColorControler 
        onDecrease={() => setColor('red', -1 * COLOR_CHANGE)}
        onIncrease={() => setColor('red', COLOR_CHANGE)}
        color="red"
      />
      <ColorControler 
        onDecrease={() => setColor('green', -1 * COLOR_CHANGE)}
        onIncrease={() => setColor('green', COLOR_CHANGE)}
        color="green"
      />
      <ColorControler 
        onDecrease={() => setColor('blue', -1 * COLOR_CHANGE)}
        onIncrease={() => setColor('blue', COLOR_CHANGE)}
        color="blue"
      />
      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})` }} />
    </View>
  );
};

export default ColorControl;