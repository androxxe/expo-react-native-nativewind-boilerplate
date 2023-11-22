import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { MainTabsStackParamList } from "./main-tabs.types";

export type RootStackParamList = {
  Login: undefined;
  MainTabs: NavigatorScreenParams<MainTabsStackParamList>;
};

export type LoginProps = StackScreenProps<RootStackParamList, "Login">;
export type MainTabsProps = StackScreenProps<RootStackParamList, "MainTabs">;
