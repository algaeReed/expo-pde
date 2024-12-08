import { StyleSheet, Text } from "react-native";

import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const router = useRouter();

  return (
    <Text
      onPress={() => {
        console.log("View/Key");
        router.push("/View/Key");
      }}
    >
      11111111
    </Text>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
