import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Layout from "./src/components/layout";
import { AdminDrawer, HomeDrawer, MainStack } from "./src/navigations";
import {
  DummyScreen,
  ListScreen,
  ReadScreen,
  Login,
  Signup,
  Home,
  AddCourse,
  Dashboard,
  Splash,
  ViewPDF,
  Chat,
  CardDetails,
  Notifications, // user
  AddNotification, // admin
} from "./src/screens";
import AskForPayment from "./src/screens/payment1";
import {_handleDisableYellowBoxWarnings} from "@services"


export default function App() {
  useEffect(()=>{
    _handleDisableYellowBoxWarnings();
  },[])
  return (
    <NativeBaseProvider>
      <MainStack/>
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
