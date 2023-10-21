import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';

const AddFoodOrCategory = ({navigation}) => {

  const {params} = useRoute()

  const IS_EDIT = params?.isEdit

  const [catgName, setCatgName] = useState('');
  const [catgImageURL, setCatgImageURL] = useState('');

  const addCategory = () => {
    firestore().collection('catogries').add({
      title: catgName,
      imageURL: catgImageURL,
    });
    navigation.goBack();
  };

  const [foodTitle, setFoodTitle] = useState(IS_EDIT ? params.title : '');
  const [foodImageURL, setFoodImageURL] = useState(IS_EDIT ? params.image : '');
  const [foodPrice, setFoodPrice] = useState( IS_EDIT ? params.price.toString() : '');

  const addFood = () => {
    firestore()
      .collection('foods')
      .add({
        imageURL: foodImageURL,
        title: foodTitle,
        price: foodPrice,
      })
      .then(res => {
        Alert.alert('Food Added');
        navigation.goBack()
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error Happen');
      });
  };

  const editFood = () => {
    firestore()
      .collection('foods')
      .doc(params?.itemKey)
      .update({
        imageURL: foodImageURL,
        title: foodTitle,
        price: foodPrice,
      })
      .then(res => {
        Alert.alert('Food Updated');
        navigation.goBack()
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error Happen');
      });
  };



  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TextInput
        placeholder="Category Name"
        value={catgName}
        onChangeText={text => setCatgName(text)}
      />
      <TextInput
        placeholder="Category Image URL"
        value={catgImageURL}
        onChangeText={text => setCatgImageURL(text)}
      />
      <Button title="Add Category" onPress={addCategory} />

      <TextInput
        style={{marginTop: 50}}
        placeholder="Food Title"
        value={foodTitle}
        onChangeText={text => setFoodTitle(text)}
      />

      <TextInput
        placeholder="Food Image URL"
        value={foodImageURL}
        onChangeText={text => setFoodImageURL(text)}
      />

      <TextInput
        placeholder="Food Price"
        value={foodPrice}
        onChangeText={text => setFoodPrice(text)}
      />

      {IS_EDIT ? (
        <Button title="Edit Food" onPress={editFood} />
      ) : (
        <Button title="Add Food" onPress={addFood} />
      )}
    </View>
  );
};

export default AddFoodOrCategory;

const styles = StyleSheet.create({});
