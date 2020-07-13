import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const PromotionItem = (props) => (
  <View style={styles.banner}>
    <Image style={styles.image} source={{uri: props.image}} />
  </View>
);

const styles = StyleSheet.create({
  banner: {
    width: 350,
    height: 180,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
