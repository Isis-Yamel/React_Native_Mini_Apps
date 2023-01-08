import React from 'react';
import { Button, View, Text } from 'react-native';

const ColorControler = ({color, onDecrease, onIncrease}) => {

  return (
    <View>
      <Text>{color}</Text>
      <Button 
        onPress={() => onIncrease()}
        title={`More ${color}`} 
      />
       <Button 
        onPress={() => onDecrease()}
        title={`Less ${color}`} 
      />
    </View>
  )
};

export default ColorControler;