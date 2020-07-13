import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export const CategoryItem = (props) => (
  <View style={styles.container}>
    <View style={styles.green_box}>
      <Image source={{uri: props.image}} style={styles.image} />
    </View>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  green_box: {
    width: '100%',
    height: 70,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#EDFCEA',
    alignItems: 'center',
  },
  title: {
    marginTop: 8,
    color: '#333',
    fontFamily: 'Nunito-Medium',
  }
});
