import { View, Text, Image } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/Product/ProductListItem";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View className="flex-1 p-3">
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="w-full aspect-square"
      />

      <Text className="text-sm font-bold">Select size:</Text>
      <View className="flex-row justify-around my-3">
        {sizes.map((size) => (
          <View
            key={size}
            className="items-center justify-center w-12 h-12 bg-gray-300 rounded-full"
          >
            <Text className="text-lg font-medium">{size}</Text>
          </View>
        ))}
      </View>
      <Text className="text-lg font-bold">Price: ${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
