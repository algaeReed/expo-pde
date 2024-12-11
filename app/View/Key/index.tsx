import useUserStore from "@/store";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ActivateInfo = ({}) => {
  const { userInfo, setUserInfo, clearUserInfo } = useUserStore();

  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const startDeduplication = () => {
    if (!inputValue.trim()) {
      Alert.alert("提示", "请输入卡密");
      return;
    }

    if (inputValue.length < 6) {
      Alert.alert("提示", "卡密格式不正确");
      return;
    }

    // Simulate activation request
    setTimeout(() => {
      const isActivated = true; // Simulate activation success

      if (isActivated) {
        setUserInfo({
          token: inputValue,
        });
        // Store token locally
        // Save to AsyncStorage or other local storage
        Alert.alert("成功", "激活成功", [
          {
            text: "OK",
            onPress: () => {
              // navigate back to the previous screen
            },
          },
        ]);
      } else {
        Alert.alert("失败", "激活失败，请重试");
      }
    }, 1000); // Simulate network delay
  };

  return (
    <View style={styles.main}>
      {/* Header部分 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>PDE</Text>
      </View>
      {/* 滚动容器部分 */}
      <ScrollView style={styles.container}>
        <View style={styles.activeTitle}>
          <Text style={styles.icon}>📱</Text>
          <Text style={styles.title}>卡密</Text>
        </View>
        {/* Activation section */}
        <View style={[styles.section, styles.sectionPadding]}>
          <TextInput style={styles.input} placeholder='请输入卡密' value={inputValue} onChangeText={setInputValue} />
          <TouchableOpacity style={[styles.btn, styles.linear, styles.btnLarge]} onPress={startDeduplication}>
            <Text style={styles.btnText}>激活</Text>
          </TouchableOpacity>
        </View>

        {/* 提示部分 */}
        <View style={styles.section}>
          <View style={styles.activeTitle}>
            <Image source={require("@/assets/point.png")} style={styles.activeTitleImage} />
            <Text style={styles.h3}>温馨提示</Text>
          </View>
          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxLabel}>本软件不支持多端登录，如需换手机使用，请在应用内进行解绑</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "relative",
  },

  header: {
    height: 120,
    width: Dimensions.get("window").width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#59c2e8",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },

  headerText: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
  },

  container: {
    position: "sticky",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginHorizontal: "6%",

    marginTop: -40,
  },

  section: {
    marginBottom: 20,
  },

  sectionPadding: {
    paddingVertical: 20,
  },

  activeTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fafafa",
    backgroundColor: "#f6f6f6",
    height: 40,
    marginBottom: 20,
    borderRadius: 4,
    paddingHorizontal: 10,
  },

  activeTitleImage: {
    width: 20,
    height: 20,
  },

  h3: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  tagItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#f6f6f6",
    color: "#333",
    borderRadius: 15,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    boxSizing: "border-box",
    cursor: "pointer",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  tagItemSelected: {
    backgroundColor: "#59c2e8",
    color: "white",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#54b9a0",
    color: "white",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
    textAlign: "center",
  },

  linear: {
    backgroundColor: "#54b8e3",
    backgroundImage:
      "linear-gradient(160deg, #54b8e3 0%, #4fade3 19%, #4291e6 39%, #3776e2 60%, #2d5ee6 80%, #2a51e2 100%)",
  },

  btnText: {
    color: "white",
    textAlign: "center",
  },

  btnLarge: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },

  checkboxRow: {
    marginTop: 10,
  },

  checkboxLabel: {
    fontSize: 14,
    color: "#666",
  },
});

export default ActivateInfo;
