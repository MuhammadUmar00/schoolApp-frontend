import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
    DummyScreen,
    ListScreen,
    ReadScreen,
    AdminLogin,
    AddCourse,
    Dashboard
} from '../../screens';
import LayOut  from '../../components/layout';
import  { AdminDrawerComp }  from '../../components/adminDrawer';

const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <AdminDrawerComp {...props} />}>
                <Drawer.Screen name="Home" component={Dashboard} options={{headerShown:false}} />
                <Drawer.Screen name="AddCourse" component={AddCourse} options={{headerShown:false}} />
                <Drawer.Screen name="List" component={ListScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Boxes" component={DummyScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Read" component={ReadScreen} options={{headerShown:false}} />
                <Drawer.Screen name="Layout" component={LayOut} options={{headerShown:false}} />
                <Drawer.Screen name="AdminLogin" component={AdminLogin} options={{headerShown:false}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}