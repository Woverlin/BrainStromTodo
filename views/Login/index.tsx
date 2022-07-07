import React from 'react';
import {View, Text, Dimensions, Image, StatusBar} from 'react-native';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import Logo from '../../assets/logo.svg';
import FacebookIcon from '../../assets/facebook.svg';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const ButtonIcon = ({Icon, title, backgroundColor, onPress}: any) => (
  <TouchableOpacity
    style={{
      backgroundColor,
      flexDirection: 'row',
      marginBottom: 20,
      borderRadius: 5,
    }}
    onPress={onPress}>
    {Icon}
    <View style={{justifyContent: 'center', alignItems: 'center', flexGrow: 1}}>
      <Text style={{color: 'white'}}>{title.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F8FBFC',
          justifyContent: 'flex-end',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Text style={{position: 'absolute', top: 20, right: 20}}>Skip</Text>
        <Text style={{fontSize: 16}}>Hi, there! Welcome to</Text>
        <Logo width={100} height={100} />
      </View>
      <View style={{flex: 1, backgroundColor: 'white', padding: 45}}>
        <Text style={{fontSize: 14, textAlign: 'center', marginBottom: 40}}>
          Very Simple Thins To-do List. Helps you manage your daily life,
          without any hassle
        </Text>

        <ButtonIcon
          backgroundColor="#3B5798"
          title="Facebook"
          Icon={<FacebookIcon />}
          onPress={() => navigation.navigate('Home')}
        />
        <ButtonIcon
          backgroundColor="#59DCFF"
          title="Twitter"
          onPress={() => navigation.navigate('Home')}
          Icon={
            <Image
              style={{width: 50, height: 50}}
              source={require('../../assets/twitter.png')}
            />
          }
        />
      </View>
    </View>
  );
};
export default Login;
