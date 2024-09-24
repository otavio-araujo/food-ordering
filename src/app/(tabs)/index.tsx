import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/src/components/Themed";
import products from "@/assets/data/products";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View className="p-4 bg-white rounded-2xl">
      <Image
        source={{ uri: product.image }}
        className="w-[100%] aspect-square"
      />
      <Text className="text-lg font-semibold">{product.name}</Text>
      <Text className="mt-2 font-bold text-blue-400">${product.price}</Text>
    </View>
  );
}
