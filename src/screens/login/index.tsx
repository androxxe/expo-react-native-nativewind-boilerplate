import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { LoginProps } from "@/routes/index.types";
import { API_URL } from "@env";

export const LoginScreen = () => {
  const navigaton = useNavigation<LoginProps["navigation"]>();

  const APP_VARIANT = process.env;

  return (
    <View className="bg-green-500 flex-1 items-center justify-center">
      <Text className="text-red-500">Login Screen</Text>
      <Button
        onPress={() =>
          navigaton.navigate("MainTabs", {
            screen: "Home",
          })
        }
        title="To Home"
      />
      <Text>APP_VARIANT: {JSON.stringify({ APP_VARIANT })}</Text>
      <Text>{API_URL}</Text>
    </View>
  );
};
