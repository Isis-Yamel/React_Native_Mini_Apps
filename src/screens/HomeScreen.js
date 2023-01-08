import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>React Native Basics</Text>
      <Button 
        onPress={() => navigation.navigate('Component')}
        title="Go to Components demo" 
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo" 
      />
      <Button 
        onPress={() => navigation.navigate('ColorCon')}
        title="Go to Color Controler Demo" 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
