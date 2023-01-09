import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const InputScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={(userName) => setName(userName)}
        value={name}
      />
      <Text> {`You are ${name}`} </Text>

      <Text>Enter password</Text>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        onChangeText={(userPassword) => setPassword(userPassword)}
        value={password}
      />
      {password.length < 5 ? <Text style={styles.passStyle}>Password should be longer than 5 characters</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'black',
    margin: 15,
    borderWidth: 2,
  },
  passStyle: {
    color: 'red'
  }
});

export default InputScreen;