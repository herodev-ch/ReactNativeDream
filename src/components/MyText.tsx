import React from 'react';
import {Text} from 'react-native';

const MyText = ({onPress, children, style, boldy = false, ...rest}) => {
  const fontFamily = boldy ? 'Audiowide-Regular' : 'Redressed-Regular';
  return (
    <Text
      onPress={onPress}
      style={[{color: 'black'}, {fontFamily}, style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default MyText;
