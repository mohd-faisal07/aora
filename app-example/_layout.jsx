import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};
export default layout;
