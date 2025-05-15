import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // or "light-content"
      />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}