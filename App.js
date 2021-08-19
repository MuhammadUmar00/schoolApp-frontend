import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import LayOut from './src/components/layout';
import { AdminDrawer, HomeDrawer, MainStack }  from './src/navigations'
import { DummyScreen, ListScreen, ReadScreen, Login, Signup, Home, AddCourse, Dashboard, Splash, ViewPDF } from './src/screens';

export default function App() {
  return (
    <NativeBaseProvider>
    <MainStack />
    <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
