import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const PopularRestaurantsItem = (props) => (
  <View style={styles.container}>
    <Image source={{uri: props.image}} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
