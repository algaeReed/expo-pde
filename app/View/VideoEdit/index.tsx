import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function VideoEdit() {
  return (
    <View style={styles.container}>
      <Text>VideoEdit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
