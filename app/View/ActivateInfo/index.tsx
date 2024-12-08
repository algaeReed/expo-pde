import Constants from "expo-constants";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ActivateInfo() {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          router.push("/View/Key");
        }}
      >
        ActivateInfo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
