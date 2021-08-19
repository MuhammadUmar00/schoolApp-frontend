import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens'
import HomeDrawer from './drawers/userDrawer'
import AdminDrawer from './drawers/adminDrawer'


const Stack=createStackNavigator()
export default function StartStack() {
  return (        
<NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} options={{headerShown:false}}/>
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}