import React, {useState} from 'react';
import Home from './src/screens/Home';
import MainInput from './src/components/MainInput';
import {View} from 'react-native';

const App = () => {
  const [value, setValue] = useState('');

  console.log(value);

  return (
    <View style={{justifyContent: 'center', flex: 1, paddingHorizontal: 20}}>
      <MainInput
        options={{placeholder: 'Name', onChangeText: t => setValue(t)}}
      />
      <MainInput
        options={{
          placeholder: 'Name',
          value: value,
          onChangeText: t => setValue(t),
        }}
      />
      <MainInput
        options={{
          placeholder: 'Password',
          secureTextEntry: true,
          value: value,
          onChangeText: t => setValue(t),
        }}
      />
    </View>
  );
};

export default App;
