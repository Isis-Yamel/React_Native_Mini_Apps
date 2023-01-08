import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Isis', age: 25 }, 
    { name: 'Yamel', age: 25 }, 
    { name: 'Dominik', age: 28 }, 
    { name: 'Wil', age: 21 }, 
    { name: 'Chiqui', age: 1 }, 
    { name: 'Pandi', age: 1 }, 
    { name: 'Negro', age: 5 }
  ];

  return (
    <FlatList 
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.friendList}> {item.name} - {item.age} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({ 
  friendList: {
    marginVertical: 50
  }
});

export default ListScreen;