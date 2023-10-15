import React, {FC} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Category: FC<{image: any; title: string}> = ({image, title}) => {
  return (
    <View style={styles.con}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    height: 89,
    width: 139,
    borderRadius: 32,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 11,
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    height: '48%',
    width: '48%',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Audiowide-Regular',
    color: 'red',
  },
});
export default Category;
