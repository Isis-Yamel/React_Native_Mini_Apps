import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorControler from '../components/colorControler';

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};

    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};

    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
  
    default:
      return state;
  }
}

const ColorControl = () => {
  const [state, dispatch] = useReducer(reducer, 
    { 
      red: 0,
      green: 0,
      blue: 0,
    }
  );
  
  const {red, green, blue} = state;

  const COLOR_CHANGE = 15;

  return (
    <View>
      <ColorControler 
        onDecrease={() => dispatch({ colorToChange: 'red', amount: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_CHANGE })}
        color="red"
      />
      <ColorControler 
        onDecrease={() => dispatch({ colorToChange: 'green', amount: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_CHANGE })}
        color="green"
      />
      <ColorControler 
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_CHANGE })}
        color="blue"
      />
      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

export default ColorControl;