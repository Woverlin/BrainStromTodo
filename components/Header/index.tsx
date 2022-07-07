import React from 'react';
import { View, Text } from 'react-native';
import Logo from '../../assets/logo.svg';
export default () => {
  return (
    <View style={{justifyContent: 'center',flexDirection:'row'}}>
      <Logo width={50} />
    </View>
  );
};
