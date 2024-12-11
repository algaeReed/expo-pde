import useUserStore from "@/store";
import { useNavigation } from "@react-navigation/native"; // 用于导航跳转
import { useRouter } from "expo-router";

import React, { useEffect } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ActivateInfo = ({}) => {
  const { userInfo, setUserInfo, clearUserInfo } = useUserStore();

  const router = useRouter();

  // const ActivateInfo = ({ token, setToken }) => {
  // const [currentToken, setCurrentToken] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // 检查激活状态
    const storedToken = getStoredToken();
    // setCurrentToken(storedToken || "");
  }, []);

  const getStoredToken = () => {
    // 从本地存储获取 token (根据平台需求，可以使用 React Native 的 AsyncStorage 或其他库)
    return ""; // 模拟返回一个空的 token 或存储的 token
  };

  const goToActivationPage = () => {
    console.log("跳转到激活页面...");
    router.push("/View/Key");

    // navigation.navigate("ActiveKey"); // 跳转到激活页面
  };

  const unbind = () => {
    if (!userInfo.token) {
      alert("未激活，无需解绑");
      return;
    }

    console.log("解绑操作触发...");
    // 清除本地存储中的 token
    clearUserInfo();
    // setToken(""); // 通知父组件清空 token
    alert("解绑成功");
  };

  return (
    <View style={styles.main}>
      {/* Header部分 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>激活信息</Text>
      </View>

      {/* 滚动容器部分 */}
      <ScrollView style={styles.container}>
        {/* 激活部分 */}
        <View style={[styles.section, styles.sectionPadding]}>
          {!userInfo.token ? (
            <>
              <Text style={styles.h3}>软件尚未激活，请激活使用</Text>
              <TouchableOpacity onPress={goToActivationPage} style={[styles.tagItem, styles.btn, styles.linear]}>
                <Text style={styles.btnText}>激活</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.h3}>软件已激活，可以正常使用</Text>
              <Text>{userInfo.token}</Text>
              <TouchableOpacity onPress={unbind} style={[styles.tagItem, styles.btn, styles.linear]}>
                <Text style={styles.btnText}>解绑</Text>
              </TouchableOpacity>
            </>
          )}
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

  checkboxRow: {
    marginTop: 10,
  },

  checkboxLabel: {
    fontSize: 14,
    color: "#666",
  },
});

export default ActivateInfo;
