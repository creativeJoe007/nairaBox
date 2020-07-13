import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {PromotionItem} from './PromotionItem';

export const Promotions = () => (
  <View style={styles.categories}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <PromotionItem image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCRfZg-5Y_kxuOh4ZIF98aJCYtlvQSSBye3A&usqp=CAU" />
      <PromotionItem image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR569Jr4-3K5w3bzHOVgqWUB7Izq0Z1AxRVIw&usqp=CAU" />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  categories: {
    width: '100%',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
