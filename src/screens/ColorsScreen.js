import React, { useState } from 'react';
import { Button, View, FlatList } from 'react-native';

const ColorsScreen = () => {
  const [randomColor, setRandomColor] = useState([]);

  return (
    <View>
      <Button 
        onPress={() => setRandomColor([...randomColor, generateRandomColor()])}
        title="Add a Color" 
      />
      <FlatList 
        keyExtractor={(color) => color}
        data={randomColor}
        renderItem={({item}) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
        }}
      />
    </View>
  )
};

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorsScreen;