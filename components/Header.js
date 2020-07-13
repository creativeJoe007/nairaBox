import React from 'react';
import {View, Image} from 'react-native';
import {Appbar, Badge} from 'react-native-paper';
import {styles} from './style.css';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Appbar.Header style={{backgroundColor: '#fff'}}>
        <Appbar.Action icon="menu" />

        <Appbar.Content
          title="Delivering to:"
          subtitle={'32, Adeola, Lekki, Lagos Nigeria'}
          titleStyle={styles.header_title}
          subtitleStyle={styles.header_subtitle}
        />

        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5837EeYernc7eCuG4Xfpb0aQ9r3gV-KhV5Q&usqp=CAU',
            }}
            style={styles.profile_image}
          />
          <Badge style={styles.badge} size={10} />
        </View>
      </Appbar.Header>
    </View>
  );
};
