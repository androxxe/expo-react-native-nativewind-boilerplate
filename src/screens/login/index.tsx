import {
  useNavigation,
} from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { LoginProps } from "../../routes/index.types";

export const LoginScreen = () => {
  const navigaton = useNavigation<LoginProps["navigation"]>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
      <Button
        onPress={() =>
          navigaton.navigate("MainTabs", {
            screen: "Home",
          })
        }
        title="To Home"
      />
    </View>
  );
};
