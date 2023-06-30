import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.welcomeText}>Welcome To HeroDev Youtube Channel</Text>
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
  },
});
