import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {Colors} from '../style/colors';
  
  const MainButton = ({onPress, title, loading, disable}) => {
    return (
      <TouchableOpacity
        style={[styles.cont, disable && {opacity: 0.5}]}
        onPress={() => {
          onPress && onPress();
        }}
        disabled={disable}>
        {loading ? (
          <ActivityIndicator color={Colors.white} />
        ) : (
          <Text style={styles.titleText}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  };
  
  export default MainButton;
  
  const styles = StyleSheet.create({
    cont: {
      height: 48,
      width: '100%',
      borderRadius: 8,
      backgroundColor: Colors.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.white,
    },
  });