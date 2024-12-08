import React, { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ActivateInfo from "../View/ActivateInfo";
import RemoveDuplication from "../View/RemoveDuplication";
import VideoClean from "../View/VideoClean";
import VideoEdit from "../View/VideoEdit";

// 模拟 tab 数据
const tabs = [
  { text: "视频清洗", icon: require("@/assets/tabbar/clean.png"), component: VideoClean }, // 替换为你实际的图片路径
  { text: "视频混剪", icon: require("@/assets/tabbar/edit.png"), component: VideoEdit },
  { text: "全网去重", icon: require("@/assets/tabbar/remove.png"), component: RemoveDuplication },
  { text: "激活信息", icon: require("@/assets/tabbar/activate.png"), component: ActivateInfo },
];

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0); // 当前选中的 tab 索引
  const flatListRef = React.createRef<FlatList>(); // FlatList 引用

  // 切换 tab 页
  const switchTab = (index: number) => {
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ index }); // 滚动到对应页面
  };

  // 监听 FlatList 滚动事件
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width); // 计算当前显示的页面索引
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      {/* FlatList 滑动区域，渲染组件 */}
      <FlatList
        ref={flatListRef}
        data={tabs} // 使用 tabs 数据
        horizontal
        pagingEnabled // 启用分页
        renderItem={({ item, index }) => {
          const Component = item.component; // 获取当前 Tab 对应的组件
          return (
            <View key={index} style={[styles.page]}>
              <Component /> {/* 渲染对应的组件 */}
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        onScroll={handleScroll} // 滚动时监听
        scrollEventThrottle={16} // 控制滚动事件触发的频率
        showsHorizontalScrollIndicator={false} // 隐藏滚动条
      />

      {/* 底部 tab 导航栏 */}
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => switchTab(index)}
            style={[styles.tabItem, currentIndex === index && styles.activeTab]}
          >
            <Image source={tab.icon} style={styles.tabIcon} />
            <Text style={[styles.tabText, currentIndex === index && styles.activeText]}>{tab.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    justifyContent: "flex-end", // 将底部导航栏放置在屏幕底部
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 10, // 给页面添加圆角
    shadowColor: "#000", // 阴影效果
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 4, // Android 阴影
    width: width,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    height: 60,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
  activeTab: {
    backgroundColor: "#e6e6e6", // 高亮选中 tab 的背景
  },
  activeText: {
    color: "#5db5c9", // 高亮颜色
  },
});
