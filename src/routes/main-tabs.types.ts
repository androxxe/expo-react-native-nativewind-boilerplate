import { StackScreenProps } from "@react-navigation/stack";

export type MainTabsStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeProps = StackScreenProps<MainTabsStackParamList, "Home">;
export type ProfileProps = StackScreenProps<MainTabsStackParamList, "Profile">;
