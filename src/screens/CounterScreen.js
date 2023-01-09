import React, { useReducer } from 'react';
import { Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {...state, count: state.count + action.payload }

    case 'DECREASE':
      return {...state, count: state.count + action.payload }
  
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Button 
        onPress={() => dispatch({type: 'INCREASE', payload: 1})}
        title="Increase" 
      />
      <Button 
        onPress={() => dispatch({type: 'DECREASE', payload: -1})}
        title="Decrease" 
      />
      <Text>Your current counter: {state.count} </Text>
    </View>
  )
};

export default CounterScreen;