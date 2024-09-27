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
      <Stack.Screen
        options={{ title: product?.name, headerTitleAlign: "center" }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className="w-full aspect-square"
      />

      <Text className="text-sm font-bold">Select size:</Text>
      <View className="flex-row justify-around my-3">
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            key={size}
            className={`items-center justify-center w-12 h-12 rounded-full ${
              selectedSize === size ? "bg-gray-300" : ""
            }`}
          >
            <Text
              className={`tex t-lg font-medium ${
                selectedSize === size ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="mt-auto text-lg font-bold">
        Price: ${product.price.toFixed(2)}
      </Text>
      <Button text="Add to cart" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailsScreen;
