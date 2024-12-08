import Constants from "expo-constants";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Key() {
  const [url, setUrl] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>("");

  const [isDebuggerOn, setIsDebuggerOn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      console.log("test");
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>key</Text>
      <Text>key</Text>
      <Text>key</Text>
      <Text>key</Text>
      <Text>key</Text>
      <Text>key</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
