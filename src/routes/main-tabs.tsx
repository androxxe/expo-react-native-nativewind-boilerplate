import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { MainTabsStackParamList } from "./main-tabs.types";

const MainTabs = createBottomTabNavigator<MainTabsStackParamList>();

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile Screen</Text>
    </View>
  );
};

export const MainTabsStack = () => (
  <MainTabs.Navigator>
    <MainTabs.Screen name="Home" component={HomeScreen} />
    <MainTabs.Screen name="Profile" component={ProfileScreen} />
  </MainTabs.Navigator>
);
