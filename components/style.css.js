import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    // height: 60,
    backgroundColor: 'white',
  },
  header_title: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#222',
  },
  profile_image: {
    width: 30,
    height: 30,
    borderRadius: 7,
    marginRight: 16,
  },
  header_subtitle: {
    color: 'red',
    fontSize: 13,
    fontFamily: 'Nunito-Light',
  },
  badge: {
    position: 'absolute',
    right: 12,
    top: 0,
    backgroundColor: 'lightgreen',
  },
});
