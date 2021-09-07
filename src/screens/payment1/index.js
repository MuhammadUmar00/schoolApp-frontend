import React, { useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5 } from '@expo/vector-icons';
import { ButtonComp } from '../../components'
import { styles } from './paymentStyles'
import PayStack from "../../services/paystack";
import {download} from "@services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "@services";

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export default function AskForPayment({ navigation, route }) {

    const item = route.params

    const [user, setUser] = useState(false);
    const [cardDetails, setCardDetails] = useState();
    const [makePayment, setMakePayment] = useState(false);
    const [metaData, setMetaData] = useState({
        billingEmail: "paystackwebview@something.com",
    });
    const [totalAmount, setTotalAmount] = useState(item.price);
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
        createReciept()
        navigation.navigate("Read", item)
        //  await download('');
    }

    function onCancel() {
        setMakePayment(false);
        // alert("canceled");
    }

    useEffect(() => {
        getUser();
    }, []);

    async function createReciept() {
          const url = `user/add/reciept`;
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({subCategorieId: item.subCategorieId, isPaid: true, courseId: item._id, userId: user._id }),
          };
          const response = await http(url, options);
    
          if (response) alert("Success");
        }


    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.heading}>
                Please Enter your Payment details
            </Text>
            <View style={styles.circle}>
                <FontAwesome5 name="money-check-alt" size={150} color="white" />
            </View>
            <TouchableOpacity onPress={() => setMakePayment(true)}>
                <ButtonComp
                    title="Enter Payment Details"
                    width={WIDTH * 0.9}
                    height={HEIGHT * 0.07}
                    color='#fff'
                    backgroundColor='#128da5'
                    borderRadius={50}
                />
            </TouchableOpacity>
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
    )
}


