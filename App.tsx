import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from "axios"

const App = () => {


  const getBooks = async () => {
    const response = await axios.get("https://649ea51c245f077f3e9cb5bc.mockapi.io/books")
    console.log(JSON.stringify(response.data, null, 3));
    
  }

  getBooks()

  return (
    <View style={styles.cont}>
      <Text style={styles.welcomeText}>Welcome To {"\n"} HeroDev Youtube Channel</Text>
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
    textAlign:"center"
  },
});
