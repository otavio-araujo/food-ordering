import { Redirect, Stack } from "expo-router";
import { View } from "react-native";

export default function TabIndex() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Redirect href={"/(admin)/menu/"} />
    </>
  );
}
