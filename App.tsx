import React from 'react';
import Home from './src/screens/Home';
import MainButton from './src/components/MainButton';
import {View} from 'react-native';

const App = () => {
  const onPressFN = () => {
    console.log('Pressed FN');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <MainButton title="Save" onPress={onPressFN} disable={true} />
    </View>
  );
};

export default App;
