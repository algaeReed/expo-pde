import { create } from "zustand";

// 定义用户信息的类型
interface UserInfo {
  token: string | null;
  name: string;
  email: string;
}

// 定义 Store 的类型
interface UserStore {
  userInfo: UserInfo;
  setUserInfo: (newUserInfo: Partial<UserInfo>) => void; // 支持部分更新
  clearUserInfo: () => void;
}

// 创建 Zustand Store
const useUserStore = create<UserStore>((set) => ({
  // 初始状态
  userInfo: {
    token: null,
    name: "",
    email: "",
  },

  // 设置用户信息
  setUserInfo: (newUserInfo) =>
    set((state) => ({
      userInfo: { ...state.userInfo, ...newUserInfo },
    })),

  // 清除用户信息
  clearUserInfo: () =>
    set(() => ({
      userInfo: { token: null, name: "", email: "" },
    })),
}));

export default useUserStore;
