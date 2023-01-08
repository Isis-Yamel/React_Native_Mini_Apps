import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ImageCard = ({title, imageSrc}) => {
  return (
    <View>
      <Image source={imageSrc}/>
      <Text style={styles.text}>{ title }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
});

export default ImageCard;