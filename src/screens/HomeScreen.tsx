import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import MyView from '../components/MyView';
import MyText from '../components/MyText';
import Search from '../components/Search';
import Category from '../components/Category';
import firestore from '@react-native-firebase/firestore';
import FoodCard from '../components/FoodCard';

function HomeScreen({}) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [categories, setCategories] = useState([]); // Initial empty array of users
  const [foods, setFoods] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('catogries')
      .onSnapshot(querySnapshot => {
        const categories = [];

        querySnapshot.forEach(documentSnapshot => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setCategories(categories);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);


  useEffect(() => {
    const subscriber = firestore().collection("foods").onSnapshot((res) => {
      const foods = []

      res.forEach(documentSnapshot => {
        foods.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setFoods(foods);
    })

    return () => subscriber()
  },[])

  console.log(foods[0])

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <MyView style={styles.con}>
      <MyText
        style={{marginTop: 57, marginBottom: 7, marginLeft: 21, fontSize: 19}}>
        Choose the
      </MyText>
      <MyText boldy style={styles.text}>
        Food You Love
      </MyText>
      <Search />
      <MyText style={styles.text}>Catogries</MyText>
      <View style={{height: 100}}>
        <FlatList
          horizontal
          data={categories}
          renderItem={({item}) => (
            <Category title={item.title} image={{uri: item.imageURL}} />
          )}
        />
      </View>
      <MyText style={styles.text}>Main Dishes</MyText>
      <FlatList 
          horizontal
          data={foods}
          renderItem={({item}) => (
            <FoodCard image={item.imageURL}
              title={item.title}
              price={item.price}
            />
          )}
      />
    </MyView>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#f7f6ff',
  },
  text: {
    marginLeft: 21,
    fontSize: 19,
    marginBottom: 13,
  },
});
export default HomeScreen;
