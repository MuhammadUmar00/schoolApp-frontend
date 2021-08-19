import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
    DummyScreen,
    DummyScreen2,
    ListScreen,
    ReadScreen,
    Home,
    Login,
    Signup,
    AdminLogin
} from '../../screens';
import LayOut  from '../../components/layout';
import { UserDrawerComp } from '../../components/customDrawer';


const Drawer = createDrawerNavigator();

export default function UserDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <UserDrawerComp {...props} />}>
                <Drawer.Screen name="Home" component={Home} options={{headerShown:false}} />
                <Drawer.Screen name="List" component={ListScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Boxes" component={DummyScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Dummy" component={DummyScreen2} options={{headerShown:false}} />
                <Drawer.Screen name="Read" component={ReadScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Layout" component={LayOut} options={{headerShown:false}} />
                <Drawer.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Drawer.Screen name="Signup" component={Signup} options={{headerShown:false}} />
                <Drawer.Screen name="AdminLogin" component={AdminLogin} options={{headerShown:false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}