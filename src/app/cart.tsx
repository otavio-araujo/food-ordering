import { View, Text, Platform, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/Cart/CartListItem";
import Button from "../components/Forms/Button";

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="p-3">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text className="mt-5 text-lg font-medium">Total: ${total}</Text>
      <Button text="Checkout" />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
