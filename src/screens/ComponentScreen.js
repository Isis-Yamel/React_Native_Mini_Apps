import React from 'react';
import { Text, View,  StyleSheet } from 'react-native';

const ComponentScreen = () => {
  const name = 'Isis';
  return (
    <View>
      <Text style={styles.text}>This is a my first React Native</Text>
      <Text style={styles.introduce}>Hello my name is { name } </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  introduce: {
    fontSize: 30,
    color: 'blue',
  }
});

export default ComponentScreen;