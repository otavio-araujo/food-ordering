import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Button from "../components/Forms/Button";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Stack.Screen
        options={{ title: "FoodOrdering", headerTitleAlign: "center" }}
      />
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
    </View>
  );
};

export default index;
