import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.cont}>
      <View
        style={{
          borderWidth: 1,
          width: '90%',
          borderRadius: 8,
          height: 50,
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="email"
          value={inputText}
          onChangeText={text => setInputText(text)}
          // keyboardType=''
        />
      </View>

      <Text>{inputText}</Text>
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
});
