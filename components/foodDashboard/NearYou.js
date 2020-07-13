import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {NearYouItem} from './NearYouItem';

export const NearYou = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', marginTop: 15, marginBottom: 15}}>
      <Text style={styles.h1}>Fastest Near You</Text>
      <Text style={styles.h4}>View all Restaurant</Text>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 10}}>
      <NearYouItem
        title="Local Rice and Meat"
        delivery="Free Delivery"
        deliverytime="20mins"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKueUhSnoMOqQlqe4zvo5Tt5Sb3-9oYagIlA&usqp=CAU"
      />
      <NearYouItem
        title="Meat Pie and Fanta"
        delivery="Free Delivery"
        deliverytime="10mins"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYAeLlyOYQsuNmMwRPx6CLhdV9XyJpCLjoBg&usqp=CAU"
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30,
  },
  h1: {
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold',
    width: '60%',
  },
  h4: {
    fontSize: 14,
    color: 'green',
    width: '40%',
    marginTop: 2,
  },
});
