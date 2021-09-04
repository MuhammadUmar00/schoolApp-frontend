import * as React from "react";
import { View } from "react-native";
import { Paystack } from "react-native-paystack-webview";
import { Paystack as PaystackCreds } from "@constants";

export default function PayStack({ metaData, amount, onSuccess, onCancel, styles  }) {
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey={PaystackCreds.livePublic}
        amount={`${amount}.00`}
        billingEmail={metaData.billingEmail}
        activityIndicatorColor={styles.indicatorColor || "green"}
        onCancel={onCancel}
        onSuccess={onSuccess}
        autoStart={true}
      />
    </View>
  );
}
