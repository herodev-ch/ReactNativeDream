import {
  Button,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MainInput from '../components/MainInput';
import MainButton from '../components/MainButton';
import {Colors} from '../style/colors';

const AddOrEditBook = ({visible, onRequestClose}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide">
      <SafeAreaView>
        <View style={{paddingHorizontal: 20}}>
          <Pressable style={{zIndex: 1}} onPress={() => onRequestClose()}>
            <Image
              source={require('../assets/icons/close-icon.png')}
              style={styles.closeIcon}
            />
          </Pressable>

          <MainInput options={{placeholder: 'Book Name'}} />

          <MainInput options={{placeholder: 'Author Name'}} />

          <MainInput options={{placeholder: 'Price'}} />

          <MainInput options={{placeholder: 'Cover URL'}} />

          <MainButton title="Save Book" onPress={() => onRequestClose()} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddOrEditBook;

const styles = StyleSheet.create({
  closeIcon: {
    height: 35,
    width: 35,
    tintColor: Colors.mainColor,
    resizeMode: 'stretch',
    marginBottom: 30,
  },
});
