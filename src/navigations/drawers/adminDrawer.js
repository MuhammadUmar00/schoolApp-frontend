import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DummyScreen,
  ListScreen,
  ReadScreen,
  AdminLogin,
  AddCourse,
  Dashboard,
  ViewPDF,
  Chat,
  CardDetails,
  AskForPayment,
  AddNotification,
} from "../../screens";
import LayOut from "../../components/layout";
import { AdminDrawerComp } from "../../components/adminDrawer";


const Drawer = createDrawerNavigator();

export default function AdminDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <AdminDrawerComp {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AddCourse"
        component={AddCourse}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AddNotification"
        component={AddNotification}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="List"
        component={ListScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Boxes"
        component={DummyScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Read"
        component={ReadScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Layout"
        component={LayOut}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ViewPDF"
        component={ViewPDF}
        options={{ headerShown: false }}
      />
      {/* <Drawer.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{ headerShown: false }}
      /> */}
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Payment1"
        component={AskForPayment}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Payment2"
        component={CardDetails}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
