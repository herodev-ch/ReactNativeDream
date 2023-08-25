import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../style/colors';

interface Props {
  options: TextInputProps;
}

const MainInput: FC<Props> = ({options}) => {
  return (
    <View style={styles.cont}>
      <TextInput style={styles.textInput} {...options} />
    </View>
  );
};

export default MainInput;

const styles = StyleSheet.create({
  cont: {
    height: 48,
    borderRadius: 8,
    width: '100%',
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    marginBottom: 8,
  },
  textInput: {
    padding: 5,
    fontSize: 16,
    marginHorizontal: 5,
    color: '#9b9b9b',
  },
});
