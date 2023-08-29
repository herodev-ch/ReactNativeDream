import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddOrEditBook = ({visible, onRequestClose}) => {
  return (
    <Modal visible={visible} 
    onRequestClose={onRequestClose}
    animationType='slide'
    >
        <SafeAreaView>

      <Text>AddOrEditBook</Text>
      <Button 
      title='close modal'
      onPress={() => onRequestClose()}
      />
      </SafeAreaView>
    </Modal>
  )
}

export default AddOrEditBook

const styles = StyleSheet.create({})