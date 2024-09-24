import { Image, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";

const ProductListItem = ({ product }) => {
  return (
    <View className="p-4 m-2 bg-white rounded-2xl">
      <Image
        source={{ uri: product.image }}
        className="w-[100%] aspect-square"
      />
      <Text className="text-lg font-semibold">{product.name}</Text>
      <Text className="mt-2 font-bold text-blue-400">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
