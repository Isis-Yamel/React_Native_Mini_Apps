import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button 
        onPress={() => setCounter((prevCounter) => prevCounter + 1)}
        title="Increase" 
      />
      <Button 
        onPress={() => setCounter((prevCounter) => prevCounter - 1)}
        title="Decrease" 
      />
      <Text style={styles.text}>Your current counter: {counter} </Text>
    </View>
  )
};

export default CounterScreen;