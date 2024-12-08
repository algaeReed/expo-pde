import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function VideoClean() {
  return (
    <View style={styles.container}>
      <Text>ActivateInfo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
