import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/Order/OrderListItem";
import OrderItemListItem from "@/src/components/Order/OrderItemListItem";

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found!</Text>;
  }

  return (
    <View className="p-4">
      <Stack.Screen
        options={{ title: `Order #${order.id}`, headerTitleAlign: "center" }}
      />

      <OrderListItem order={order} />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        style={{ marginTop: 10 }}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default OrderDetailsScreen;
