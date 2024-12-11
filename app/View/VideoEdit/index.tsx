import useUserStore from "@/store";
import React, { useState } from "react";
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VideoEdit = ({}) => {
  const { userInfo, setUserInfo, clearUserInfo } = useUserStore();

  const [tagOptions1, setTagOptions1] = useState([
    { id: "tag1", name: "智能分割", selected: false, command: "smart_split" },
    { id: "tag2", name: "等量分割", selected: false, command: "equal_split" },
    { id: "tag3", name: "视频随机组合", selected: false, command: "video_random_combine" },
  ]);

  const toggleSelection = (tag) => {
    setTagOptions1((prevTags) =>
      prevTags.map((item) => (item.id === tag.id ? { ...item, selected: !item.selected } : item))
    );
  };

  const selectVideo = () => {
    console.log("选择视频");
    Alert.alert("提示", "选择视频功能未实现");
  };

  const startDeduplication = () => {
    if (!userInfo.token) {
      Alert.alert("提示", "软件未激活，请激活软件");
    } else {
      console.log("开始处理");
      Alert.alert("提示", "开始处理");
    }
  };

  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>视频混剪</Text>
      </View>

      {/* 滚动容器 */}
      <ScrollView style={styles.container}>
        {/* 混剪领域 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>混剪领域</Text>
          <View style={[styles.tags]}>
            {tagOptions1.map((tag) => (
              <TouchableOpacity
                key={tag.id}
                style={[
                  styles.tagItem,
                  tag.selected ? styles.selectedTag : null,
                  tag.id == "tag3" ? styles.tagItemBlock : null,
                ]}
                onPress={() => toggleSelection(tag)}
              >
                <Text style={styles.tagText}>{tag.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 按钮部分 */}
        <View style={styles.section}>
          <View style={styles.tags}>
            <TouchableOpacity style={[styles.tagItem, styles.button]} onPress={selectVideo}>
              <Text style={styles.buttonText}>选择视频</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tagItem, styles.button, styles.linear]} onPress={startDeduplication}>
              <Text style={styles.buttonText}>开始处理</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    height: 120,
    width: Dimensions.get("screen").width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#59c2e8",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  container: {
    marginHorizontal: "6%",
    marginTop: -40,
    padding: 15,
    backgroundColor: "#ffffff",
    borderColor: "#fbfbfb",
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  tagItem: {
    padding: 6,
    marginBottom: 10,
    backgroundColor: "#f6f6f6",
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "48%",
  },
  tagItemBlock: {
    minWidth: "100%",
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
  selectedTag: {
    backgroundColor: "#59c2e8",
    color: "white",
  },
  button: {
    backgroundColor: "#54b9a0",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  linear: {
    backgroundColor: "#54b8e3",
  },
});

export default VideoEdit;
