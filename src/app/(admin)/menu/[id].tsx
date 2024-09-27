import { View, Text, Image, Pressable, Alert } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/Product/ProductListItem";
import Button from "@/src/components/Forms/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { addItem } = useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = React.useState<PizzaSize>("M");
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
  };

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

      <Text className="self-center text-lg font-semibold">{product.name}</Text>
      <Text className="self-center text-[16px] font-normal text-blue-500">
        Price: ${product.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;
