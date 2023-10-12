import React, { useEffect, useState } from 'react';
import {Image, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {

  const [dish, setDish] = useState()

const getData = async () =>{
  const foodsCollection = await firestore().collection('foods').get()
  console.log(foodsCollection.docs[0].data())
  setDish(foodsCollection.docs[0].data())
}

useEffect(() => {
  getData()
}, [])

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 30, color: 'black'}}>Home Screen</Text>
      <Text>{dish.price}</Text>
      <Text>{dish.title}</Text>
      <Image source={{uri:dish.image_url}} style={{height: 100, width:100}}/>
    </View>
  );
};

export default HomeScreen;
