import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorControler from '../components/colorControler';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_RED':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};

    case 'CHANGE_GREEN':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};

    case 'CHANGE_BLUE':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};
  
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
        onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_CHANGE })}
        color="red"
      />
      <ColorControler 
        onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_CHANGE })}
        color="green"
      />
      <ColorControler 
        onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_CHANGE * -1 })}
        onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_CHANGE })}
        color="blue"
      />
      <View style={{ width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

export default ColorControl;