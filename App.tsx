import React from 'react';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      </NavigationContainer>
  );
};

export default App;

