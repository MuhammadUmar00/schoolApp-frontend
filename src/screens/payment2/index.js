import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp } from "../../components";
import { styles } from "./paymentStyles";
import PayStack from "../../services/paystack";
import {download} from "@services";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

export default function CardDetails({ navigation, route }) {
  const item = route.params;

  const [user, setUser] = useState(false);
  const [cardDetails, setCardDetails] = useState();
  const [makePayment, setMakePayment] = useState(false);
  const [metaData, setMetaData] = useState({
    billingEmail: "paystackwebview@something.com",
  });
  const [totalAmount, setTotalAmount] = useState(10);
  const paystackStyles = { indicatorColor: "#128da5" };

  async function getUser() {
    let tempUser = await AsyncStorage.getItem("user");
    if (tempUser) {
      tempUser = JSON.parse(tempUser);
      setUser(tempUser);
    }
  }

  function onChange(form) {
    setCardDetails(form);
  }

  async function onSuccess() {
    setMakePayment(false);
    // alert("success");
  //  await download('');
  }

  function onCancel() {
    setMakePayment(false);
    alert("canceled");
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <ScrollView
            style={{ width: WIDTH }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <StatusBar style="auto" />
            <Text style={styles.heading}>
              Please Enter your Payment details for buying {item.name}
            </Text>
            <Text style={styles.lilheading}>Card Details:</Text>
            <View style={styles.cardetails}>
              <CreditCardInput onChange={onChange} inputStyle={styles.input} />
            </View>
            <Text style={styles.lilheading}>My details Details:</Text>
            <Text
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#128da5"
              selectionColor="#fff"
            >
              {user.name}
            </Text>
            <Text
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#128da5"
              selectionColor="#fff"
            >
              {user.email}
            </Text>
            <TouchableOpacity onPress={() => setMakePayment(true)}>
              <ButtonComp
                title="Enter Payment Details"
                width={WIDTH * 0.7}
                height={HEIGHT * 0.06}
                color="#fff"
                backgroundColor="#128da5"
                borderRadius={10}
              />
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {makePayment && (
        <PayStack
          metaData={metaData}
          amount={totalAmount}
          onSuccess={onSuccess}
          onCancel={onCancel}
          styles={paystackStyles}
        />
      )}
    </View>
  );
}
