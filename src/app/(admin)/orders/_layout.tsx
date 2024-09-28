import { Stack } from "expo-router";

export default function OurderLayout() {
  return (
    <Stack>
      {/* <Stack.Screen
        name="index"
        options={{ title: "Orders", headerTitleAlign: "center" }}
      /> */}
      <Stack.Screen
        name="list"
        options={{ title: "Orders", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
