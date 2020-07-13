import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const NearYouItem = (props) => (
  <View style={styles.container}>
    <View style={styles.green_box}>
      <Image source={{uri: props.image}} style={styles.image} />
    </View>
    <View style={styles.data_container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{flexDirection: 'row', marginTop: 8}}>
        <Text style={styles.info}>{props.deliverytime}</Text>
        <Text style={[styles.info, {marginLeft: 8, marginRight: 8}]}>
          {'-'}
        </Text>
        <Text style={styles.info}>{props.delivery}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 220,
    // marginLeft: 10,
    marginRight: 15,
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#555',
    shadowOpacity: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  green_box: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: '#111',
    fontSize: 16,
    fontWeight: 'bold',
    // fontFamily: 'Nunito-Bold',
  },
  info: {
    color: '#333',
    fontSize: 13,
    // fontFamily: 'Nunito-Light',
  },
  data_container: {
    width: '100%',
    padding: 15,
  },
});
