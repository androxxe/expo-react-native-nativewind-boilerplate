import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView className="flex-1">
        <Routes />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
