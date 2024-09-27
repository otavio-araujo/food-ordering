import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable className="mt-1">
              {({ pressed }) => (
                <FontAwesome
                  name="shopping-cart"
                  size={20}
                  color="#3b82f6"
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Menu", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
