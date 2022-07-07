/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './views/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#F8FBFC'}} />
      <Navigator />
    </>
  );
};

export default App;
