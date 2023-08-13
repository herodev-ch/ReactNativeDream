
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../style/colors';

const AddButton = ({onAddPress}) => {
  return (
    <TouchableOpacity style={styles.cont} onPress={onAddPress}>
      <Image
        source={require('../assets/icons/plus.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: Colors.mainColor,
    zIndex: 1,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    tintColor: Colors.white,
    height: 45,
    width: 45,
  },
});
