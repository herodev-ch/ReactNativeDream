import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import MyText from './MyText';
import Feather from 'react-native-vector-icons/Feather';

function FoodCard({image, title, price, onPress}) {
  return (
    <View style={styles.con}>
      <View style={styles.imageCon}>
        <Image style={{height: '90%', width: '80%'}} source={{uri: image}} />
      </View>
      <View style={{flex: 1, paddingLeft: '12%'}}>
        <MyText numberOfLines={1} style={styles.title}>
          {title}
        </MyText>
        <Rating
          ratingBackgroundColor="red"
          tintColor="red"
          ratingCount={5}
          imageSize={24}
          style={{alignSelf: 'flex-start', paddingTop: 4}}
        />
        <MyText style={styles.price}>${price}</MyText>
        <View style={styles.bagCon}>
          <TouchableOpacity onPress={onPress}>
            <Feather color="red" name="shopping-bag" size={19} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    height: 190,
    width: 180,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'red',
    marginHorizontal: 22,
  },
  imageCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'Audiowide-Regular',
    color: 'white',
  },
  price: {
    color: 'white',
    fontSize: 30,
    marginVertical: 1.5,
  },
  bagCon: {
    backgroundColor: 'white',
    height: 31,
    width: 31,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    right: 12,
    borderRadius: 16.5,
  },
});
export default FoodCard;
