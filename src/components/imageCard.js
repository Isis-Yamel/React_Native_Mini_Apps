import React from 'react';
import { Text, View, Image } from 'react-native';

const ImageCard = ({title, imageSrc}) => {
  return (
    <View>
      <Image source={imageSrc}/>
      <Text style={styles.text}>{ title }</Text>
    </View>
  )
};

export default ImageCard;