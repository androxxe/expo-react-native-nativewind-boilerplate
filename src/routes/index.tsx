import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabsStack } from "./main-tabs";
import { LoginScreen } from "@/screens";
import { RootStackParamList } from "./index.types";

const Stack = createStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
