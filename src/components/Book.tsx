import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';

interface Props {
  author: string;
  nameOfBook: string;
  price: number;
  coverURL: string;
  categoryColor: string;
  onDeletePress: () => void
}

const Book: FC<Props> = ({
  author,
  nameOfBook,
  price,
  coverURL,
  categoryColor,
  onDeletePress
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, {backgroundColor: categoryColor}]}>
        <Image source={{uri: coverURL}} style={styles.image} />
        <Text style={styles.deleteText} 
        onPress={onDeletePress}
        >Delete</Text>
      </View>

      <Text>{author}</Text>
      <Text>{nameOfBook}</Text>
      <Text>{price}$</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 50},
  coloredSquare: {
    borderRadius: 8,
    height: 130,
    width: 130,
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 130,
    width: 80,
    resizeMode: 'stretch',
    marginTop: -20,
    borderRadius: 8,
  },deleteText:{
    color:"red"
  }
});
