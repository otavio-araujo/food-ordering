import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/Cart/CartListItem";
import Button from "../components/Forms/Button";
import { Stack } from "expo-router";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="p-3">
      <Stack.Screen
        options={{ title: "Shopping Cart", headerTitleAlign: "center" }}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />

      <Text className="mt-2 text-lg font-bold">
        Total Price: ${total.toFixed(2)}
      </Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
