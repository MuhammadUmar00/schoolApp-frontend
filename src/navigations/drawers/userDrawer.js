import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from '@react-navigation/native';
import {
    DummyScreen,
    DummyScreen2,
    ListScreen,
    ReadScreen,
    Home,
    Login,
    Signup,
    AdminLogin,
    ViewPDF,
    Chat,
    CardDetails,
    AskForPayment,
    Notifications,
    Extras
} from '../../screens';
import LayOut from '../../components/layout';
import { UserDrawerComp } from '../../components/customDrawer';
import AdminDrawer from './adminDrawer';


const Drawer = createDrawerNavigator();

export default function UserDrawer() {

    const [routeName, setRouteName] = React.useState("")

    async function getUser() {
        let currentUser = await AsyncStorage.getItem("user");

        currentUser = JSON.parse(currentUser);

        //console.log(currentUser)

        if (currentUser === null) setRouteName("Login");
        else setRouteName("Home");

    }

    React.useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            {routeName === "Login" ?
                < Drawer.Navigator initialRouteName="Login"
                    drawerContent={(props) => <UserDrawerComp {...props} />}
                >
                    <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Drawer.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Boxes" component={DummyScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Dummy" component={DummyScreen2} options={{ headerShown: false }} />
                    <Drawer.Screen name="Read" component={ReadScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Layout" component={LayOut} options={{ headerShown: false }} />
                    <Drawer.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <Drawer.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
                    <Drawer.Screen name="ViewPDF" component={ViewPDF} options={{ headerShown: false }} />
                    <Drawer.Screen name="Admin" component={AdminDrawer} options={{ headerShown: false }} />
                    <Drawer.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
                    <Drawer.Screen name="Payment1" component={AskForPayment} options={{ headerShown: false }} />
                    <Drawer.Screen name="Payment2" component={CardDetails} options={{ headerShown: false }} />
                    <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                    <Drawer.Screen name="Extras" component={Extras} options={{ headerShown: false }} />
                </Drawer.Navigator>
                : routeName === "Home" &&
                <Drawer.Navigator initialRouteName="Home"
                    drawerContent={(props) => <UserDrawerComp {...props} />}
                >
                    <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Drawer.Screen name="List" component={ListScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Boxes" component={DummyScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Dummy" component={DummyScreen2} options={{ headerShown: false }} />
                    <Drawer.Screen name="Read" component={ReadScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="Layout" component={LayOut} options={{ headerShown: false }} />
                    <Drawer.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
                    <Drawer.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
                    <Drawer.Screen name="ViewPDF" component={ViewPDF} options={{ headerShown: false }} />
                    <Drawer.Screen name="Admin" component={AdminDrawer} options={{ headerShown: false }} />
                    <Drawer.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
                    <Drawer.Screen name="Payment1" component={AskForPayment} options={{ headerShown: false }} />
                    <Drawer.Screen name="Payment2" component={CardDetails} options={{ headerShown: false }} />
                    <Drawer.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                    <Drawer.Screen name="Extras" component={Extras} options={{ headerShown: false }} />
                </Drawer.Navigator>
            }
        </>

    );
}