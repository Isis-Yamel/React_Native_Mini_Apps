import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box 1</Text>
      <Text style={styles.boxTwoStyle}>Box 2</Text>
      <Text style={styles.textStyle}>Box 3</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    height: 400,
  },
  textStyle: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    margin: 20,
    padding: 10,
  },
  boxTwoStyle: {
    backgroundColor: 'lightblue',
    borderWidth: 2,
    margin: 20,
    padding: 10,
    flex: 1,
    alignSelf: 'center'
  }
});

export default PositionScreen;