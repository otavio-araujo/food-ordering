import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Forms/Button";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  return (
    <View className="justify-center flex-1 p-4">
      <Stack.Screen
        options={{ title: "Sign In", headerTitleAlign: "center" }}
      />

      <Text className="text-gray-600 text-[16px]">Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="JohnDoe@gmail.com"
        placeholderTextColor="gray"
        className="p-2 mt-1 mb-5 bg-white border border-gray-200 rounded-md"
      />

      <Text className="text-gray-600 text-[16px]">Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Type your password"
        placeholderTextColor="gray"
        className="p-2 mt-1 mb-1 bg-white border border-gray-200 rounded-md"
        keyboardType="numeric"
      />

      <Text className="self-center text-xs text-red-600">{errors}</Text>

      <Button text="Log In" />
      <Link
        href="/sign-up"
        className="self-center w-full p-3 my-3 font-bold text-center text-blue-500 border border-blue-500 rounded-full"
      >
        Create an account
      </Link>
    </View>
  );
};

export default SignInScreen;
