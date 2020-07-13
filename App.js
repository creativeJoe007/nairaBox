/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';

import {Header} from './components/Header';
import {FoodCategory} from './components/foodDashboard/FoodCategory';
import {Promotions} from './components/foodDashboard/Promotions';
import {NearYou} from './components/foodDashboard/NearYou';
import {PopularRestaurants} from './components/foodDashboard/PopularRestaurants';
import {DealDay} from './components/foodDashboard/DealDay';
const App = () => {
  return (
    <View>
      <Header />
      <SafeAreaView style={{marginTop: 16, backgroundColor: '#f9f9f9'}}>
        <FoodCategory />
        {/* <DealDay /> */}
        <ScrollView style={{height: 600}}>
          <View style={{height: '100%'}}>
            <Promotions />
            <NearYou />
            <PopularRestaurants />
            <DealDay />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
