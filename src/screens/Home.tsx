import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Book from '../components/Book';

const Home = () => {
  const tempData = [
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
    {
      author: 'Wilson',
      nameOfBook: 'food',
      price: 20,
      coverURL:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1636980773',
      categoryColor: 'brown',
    },
  ];

  return (
    <View>
      <FlatList
      numColumns={2}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.col}
        data={tempData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <Book {...item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    content:{
        paddingTop: 100,
        justifyContent:"space-between",
        paddingHorizontal:30
    },
    col:{
        flex:1,
        justifyContent:"space-around"
    }
});
