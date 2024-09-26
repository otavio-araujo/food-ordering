import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { CartItem } from "../../types";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/src/providers/CartProvider";
import { defaultPizzaImage } from "../Product/ProductListItem";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();
  return (
    <View className="flex-row items-center flex-1 p-1 bg-white rounded-xl">
      <Image
        source={{ uri: cartItem.product.image || defaultPizzaImage }}
        className="w-[75px] aspect-square self-center mr-2"
        resizeMode="contain"
      />

      <View style={{ flex: 1 }}>
        <Text className="font-medium text-[16px] mb-1">
          {cartItem.product.name}
        </Text>

        <View className="flex-row gap-1">
          <Text className="font-bold text-blue-500">
            ${cartItem.product.price.toFixed(2)}
          </Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2 my-2">
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          style={{ padding: 5 }}
        />

        <Text className="font-medium text-[18px]">{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
};

export default CartListItem;
