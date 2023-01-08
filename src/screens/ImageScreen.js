import React from 'react';
import { Text, View,  StyleSheet } from 'react-native';
import ImageCard from '../components/imageCard';

const ImageScreen = () => {
  return (
    <View>
      <ImageCard title={'Forest'} imageSrc={require('../../assets/forest.jpg')}/>
      <ImageCard title={'Beach'} imageSrc={require('../../assets/beach.jpg')}/>
      <ImageCard title={'Mountain'} imageSrc={require('../../assets/mountain.jpg')}/>
    </View>
  )
};

const styles = StyleSheet.create({
});

export default ImageScreen;