import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

function Search() {
  return (
    <View style={styles.con}>
      <TextInput style={{width: '100%'}} placeholder="Search for a food item" />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: 'white',
    height: 49,
    width: '88%',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13.5,
    marginBottom: 17,
  },
});
export default Search;
