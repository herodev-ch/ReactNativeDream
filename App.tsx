import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const URL = 'https://649ea51c245f077f3e9cb5bc.mockapi.io/books';

  const getBooks = async () => {
    const response = await axios.get(URL);
    console.log(JSON.stringify(response.data, null, 3));
  };

  useEffect(() => {
    getBooks();
  }, []);

  const addBook = async () => {
    const response = await axios.post(URL, {
      author: 'john',
      cover: 'https://img.wattpad.com/cover/57258457-288-k474609.jpg',
      name_of_book: 'sky book',
    });
    console.log(JSON.stringify(response.data, null, 3));
  };

  const deleteBook = async () => {
    const response = await axios.delete(`${URL}/2`)
    console.log(JSON.stringify(response.data, null, 3));
  }

  return (
    <View style={styles.cont}>
      <Text style={styles.welcomeText}>
        Welcome To {'\n'} HeroDev Youtube Channel
      </Text>
      <Button title="add book" onPress={addBook} />
      <Button title="delete book" onPress={deleteBook} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 23,
    textAlign: 'center',
  },
});
