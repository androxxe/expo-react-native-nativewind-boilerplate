import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { LoginProps } from "@/routes/index.types";

export const LoginScreen = () => {
  const navigaton = useNavigation<LoginProps["navigation"]>();

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
    </View>
  );
};
