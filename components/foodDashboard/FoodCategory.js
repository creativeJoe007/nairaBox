import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CategoryItem} from './CategoryItem';
import {styles} from './style.css';

export const FoodCategory = () => (
  <View>
    <View style={styles.search_box}>
      <TextInput
        style={styles.search_field}
        placeholderTextColor="#888"
        placeholder="Search for restruants, dishes..."
      />

      <View style={styles.search_filter_btn}>
        <Icon size={25} name="options-outline" />
      </View>
    </View>
    <View style={styles.categories}>
      <ScrollView
        style={{paddingBottom: 30}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <CategoryItem
          title="Burger"
          image="https://lh3.googleusercontent.com/proxy/3O3XoXIAEslFei3YSrtBazCUzkSF5_zwOXMme98w4F68jmgYdnkOYboeJ0oYRmTXYVuso2itUAuc3a2UD7AHfJlKVg"
        />
        <CategoryItem
          title="Dessert"
          image="https://i.ya-webdesign.com/images/food-cartoon-png.png"
        />
        <CategoryItem
          title="Pizza"
          image="https://p7.hiclipart.com/preview/427/304/898/pizza-sticker-cartoon-drawing-clip-art-pizza.jpg"
        />
        <CategoryItem
          title="Asian"
          image="https://png.pngtree.com/png-vector/20190303/ourlarge/pngtree-ramen-japanese-food-icon-isolated-on-transparent-background-png-image_736499.jpg"
        />
        <CategoryItem
          title="Fries"
          image="https://p7.hiclipart.com/preview/799/669/188/hamburger-fast-food-junk-food-soft-drink-french-fries-vector-cartoon-smiley-fries.jpg"
        />
      </ScrollView>
    </View>
  </View>
);
