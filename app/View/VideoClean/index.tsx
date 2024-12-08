import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VideoClean = ({ token }) => {
  const [md5Selected, setMd5Selected] = useState(false);

  const tagOptions1 = [
    { id: "tag1", name: "专项+随机2.1", selected: false, command: "special_random_2_1" },
    { id: "tag2", name: "专项+闪烁渐晕", selected: false, command: "special_flash_fade" },
    { id: "tag3", name: "专项+淡入淡出", selected: false, command: "special_fade_in_out" },
    { id: "tag4", name: "专项+静态渐晕", selected: false, command: "special_static_fade" },
  ];

  const tagOptions2 = [
    { id: "tag5", name: "智能边框", selected: false, command: "smart_border" },
    { id: "tag6", name: "智能叠加", selected: false, command: "smart_overlay" },
    { id: "tag7", name: "智能模糊", selected: false, command: "smart_blur" },
    { id: "tag8", name: "智能锐化", selected: false, command: "smart_sharpen" },
    { id: "tag9", name: "去除声音", selected: false, command: "remove_audio" },
    { id: "tag10", name: "掐头去尾", selected: false, command: "trim_head_tail" },
    { id: "tag11", name: "智能快放", selected: false, command: "smart_fast_play" },
    { id: "tag12", name: "智能慢放", selected: false, command: "smart_slow_play" },
    { id: "tag13", name: "智能修复", selected: false, command: "smart_repair" },
    { id: "tag14", name: "左右翻转", selected: false, command: "flip_horizontal" },
    { id: "tag15", name: "旋转90°", selected: false, command: "rotate_90" },
    { id: "tag16", name: "智能裁剪", selected: false, command: "smart_crop" },
    { id: "tag17", name: "智能灰阶", selected: false, command: "smart_grayscale" },
    { id: "tag18", name: "色彩变幻", selected: false, command: "color_shift" },
    { id: "tag19", name: "智能调色", selected: false, command: "smart_color_adjust" },
    { id: "tag20", name: "智能抽帧", selected: false, command: "smart_frame_extract" },
    { id: "tag21", name: "智能降噪", selected: false, command: "smart_denoise" },
    { id: "tag22", name: "超级去重", selected: false, command: "super_deduplication" },
    { id: "tag23", name: "线条特效", selected: false, command: "line_effect" },
  ];

  const tagOptions3 = [
    { id: "tag24", name: "选择视频", selected: false, command: "select_video" },
    { id: "tag25", name: "开始去重", selected: false, command: "start_deduplication" },
  ];

  const toggleSelection = (tag) => {
    tag.selected = !tag.selected;
  };

  const toggleMD5Selection = () => {
    setMd5Selected(!md5Selected);
  };

  const executeCommand = (command) => {
    console.log("command:", command);
    switch (command) {
      case "special_random_2_1":
        console.log("执行专项+随机2.1");
        break;
      case "special_flash_fade":
        console.log("执行专项+闪烁渐晕");
        break;
      case "special_fade_in_out":
        console.log("执行专项+淡入淡出");
        break;
      case "special_static_fade":
        console.log("执行专项+静态渐晕");
        break;
      case "smart_border":
        console.log("执行智能边框");
        break;
      // 更多命令的执行
      default:
        console.log("没有对应的命令");
    }
  };

  const startRepeating = () => {
    if (!token) {
      alert("软件未激活，请激活软件");
    } else {
      const selectedTags = [
        ...tagOptions1.filter((tag) => tag.selected).map((tag) => tag.command),
        ...tagOptions2.filter((tag) => tag.selected).map((tag) => tag.command),
        ...tagOptions3.filter((tag) => tag.selected).map((tag) => tag.command),
      ];

      selectedTags.forEach((tagCommand) => {
        executeCommand(tagCommand);
      });

      console.log("-----------------------------------------------------------------");
      console.log("选择的标签:", JSON.stringify(selectedTags));
      console.log("md5Selected:", md5Selected);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>视频清洗</Text>
      </View>

      <ScrollView style={styles.container}>
        {/* 短视频专项去重模式部分 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>短视频专项去重模式（单选）</Text>
          <View style={styles.tagsMid}>
            {tagOptions1.map((tag) => (
              <TouchableOpacity
                key={tag.id}
                onPress={() => toggleSelection(tag)}
                style={[styles.tagItem, tag.selected && styles.selectedTag]}
              >
                <Text style={styles.tagText}>{tag.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 视频特效部分 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>视频特效</Text>
          <View style={styles.tags}>
            {tagOptions2.map((tag) => (
              <TouchableOpacity
                key={tag.id}
                onPress={() => toggleSelection(tag)}
                style={[styles.tagItem, tag.selected && styles.selectedTag]}
              >
                <Text style={styles.tagText}>{tag.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 其他选项部分 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>其他选项</Text>
          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxLabel}>修改视频的md5值</Text>
            {/* <CheckBox value={md5Selected} onValueChange={toggleMD5Selection} /> */}
          </View>
          <View style={styles.tagsMid}>
            <TouchableOpacity onPress={() => console.log("选择视频")} style={styles.btn}>
              <Text style={styles.btnText}>选择视频</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={startRepeating} style={[styles.btn, styles.linear]}>
              <Text style={styles.btnText}>开始去重</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 运行状态 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>运行状态</Text>
          <View style={styles.checkboxRow}>
            <Text style={styles.checkboxLabel}>
              说明: 1.视频处理中尽量保持手机不要熄屏 2.视频处理速度与视频的大小时长有关，若处理时间过长请耐心等待
            </Text>
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
    width: Dimensions.get("screen").width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#59c2e8",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    fontSize: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
  },
  container: {
    position: "relative",
    // height: calc(100vh - 190px);
    width: "80%",
    marginHorizontal: "10%",
    marginTop: -40,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fbfbfb",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 16, color: "black", marginBottom: 10 },
  tagsMid: { flexDirection: "row", flexWrap: "wrap" },
  tags: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  tagItem: {
    marginBottom: 10,
    marginRight: 15,
    borderRadius: 6,
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#f2f2f2",
  },
  selectedTag: { backgroundColor: "#59c2e8", borderColor: "#59c2e8" },
  tagText: { fontSize: 14 },
  btn: {
    marginRight: 20,
    marginTop: 10,
    backgroundColor: "#59c2e8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnText: { color: "white", fontSize: 18 },
  linear: { backgroundColor: "#f68e55" },
  checkboxRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  checkboxLabel: { fontSize: 14, color: "black" },
});

export default VideoClean;
