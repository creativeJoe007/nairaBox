import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {DealDayItem} from './DealDayItem';

export const DealDay = () => (
  <View style={styles.container}>
    <View style={{flexDirection: 'row', marginBottom: 15}}>
      <Text style={styles.h1}>Deal of the Day</Text>
      <Text style={styles.h4}>View all Deals</Text>
    </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 10}}>
      <DealDayItem
        title="Local Rice and Meat"
        delivery="Free Delivery"
        price={8000}
        deliverytime="20mins"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKueUhSnoMOqQlqe4zvo5Tt5Sb3-9oYagIlA&usqp=CAU"
      />
      <DealDayItem
        title="Meat Pie and Fanta"
        delivery="Free Delivery"
        deliverytime="10mins"
        price={3000}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYAeLlyOYQsuNmMwRPx6CLhdV9XyJpCLjoBg&usqp=CAU"
      />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30,
  },
  h1: {
    fontSize: 19,
    color: '#000',
    fontWeight: 'bold',
    width: '70%',
  },
  h4: {
    fontSize: 14,
    color: 'green',
    width: '30%',
    marginTop: 2,
  },
});
