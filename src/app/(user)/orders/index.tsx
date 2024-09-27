import { View, FlatList } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/Order/OrderListItem";

const OrdersScreen = () => {
  return (
    <View className="p-4">
      <Stack.Screen
        options={{
          title: "Orders",
          headerTitleAlign: "center",
        }}
      />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default OrdersScreen;
