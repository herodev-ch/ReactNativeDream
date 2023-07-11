import {Alert, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Book from '../components/Book';
import axios from 'axios';

const Home = () => {
  const getListOfBooks = async () => {
    const response = await axios.get(
      'https://649ea51c245f077f3e9cb5bc.mockapi.io/books',
    );
    console.log(response.data);

    setData(response.data);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getListOfBooks();
  }, []);

  const onDeleteHandler = async bookId => {
    const response = await axios.delete(
      `https://649ea51c245f077f3e9cb5bc.mockapi.io/books/${bookId}`,
    );
    Alert.alert('Book Deleted');
    getListOfBooks();
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.col}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Book
            author={item.author}
            nameOfBook={item.name_of_book}
            price={item.price}
            coverURL={item.cover}
            onDeletePress={() => onDeleteHandler(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    paddingTop: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  col: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
