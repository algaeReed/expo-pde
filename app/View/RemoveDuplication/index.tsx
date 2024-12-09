import React, { useState } from "react";
import {
  Alert,
  Clipboard,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RemoveDuplication = ({}) => {
  const token = "";
  const [textareaValue, setTextareaValue] = useState("");
  const [videoDownUrl, setVideoDownUrl] = useState("");

  const handlePasteLink = async () => {
    try {
      const content = await Clipboard.getString();
      setTextareaValue(content);
      setVideoDownUrl("");
      console.log("粘贴内容成功:", content);
    } catch (error) {
      console.log("获取粘贴板内容失败");
    }
  };

  const handleParseWatermark = () => {
    if (!token) {
      Alert.alert("软件未激活，请激活软件");
    } else {
      console.log("执行解析去水印操作", textareaValue);
      setVideoDownUrl(textareaValue); // Placeholder for video down URL logic
    }
  };

  const handleStartDownload = () => {
    if (!token) {
      Alert.alert("软件未激活，请激活软件");
    } else {
      console.log("执行开始下载操作");
      Alert.alert("下载");
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>全网去重</Text>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={styles.activeTitle}>
            <Text style={styles.titleText}>支持平台</Text>
            <Text> {/* Replace with actual image if needed */} </Text>
          </View>
          <View style={styles.tagsMid}>
            <TextInput
              value={textareaValue}
              onChangeText={setTextareaValue}
              style={styles.url}
              multiline
              numberOfLines={10}
              placeholder='请输入/粘贴视频分享模型'
            />
          </View>
          <View>
            <Text style={styles.donwText}>下载地址：{videoDownUrl || "暂无地址"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.tagsMid}>
            <TouchableOpacity onPress={handlePasteLink} style={styles.tagItem}>
              <Text style={styles.tagText}>粘贴链接</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleParseWatermark} style={[styles.tagItem, styles.linear]}>
              <Text style={styles.tagText}>解析去水印</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleStartDownload}
            style={[styles.tagItem, styles.linear, styles.btnLarge, styles.tagItemBlock]}
          >
            <Text style={styles.tagText}>开始下载</Text>
          </TouchableOpacity>
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
    width: Dimensions.get("screen").width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#59c2e8",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    color: "white",
  },
  container: {
    height: "100%",
    // width: "80%",
    marginHorizontal: "6%",
    marginTop: -40,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fbfbfb",
  },
  section: {
    marginBottom: 20,
  },
  activeTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  tagsMid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  url: {
    backgroundColor: "#f6f6f6",
    borderRadius: 18,
    padding: 10,
    height: 200,
    width: "100%",
    textAlignVertical: "top",
  },
  donwText: {
    // overflowWrap: "break-word",
  },
  tagItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    // backgroundColor: "#f6f6f6",
    borderRadius: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    // cursor: "pointer",
    width: "48%",
  },
  linear: {
    backgroundColor: "#54b8e3",
    backgroundImage:
      "linear-gradient(160deg, #54b8e3 0%, #4fade3 19%, #4291e6 39%, #3776e2 60%, #2d5ee6 80%, #2a51e2 100%)",
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
  btnLarge: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  tagItemBlock: {
    minWidth: "100%",
  },
});

export default RemoveDuplication;
