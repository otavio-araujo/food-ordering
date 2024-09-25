import { Image, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Product } from "@/src/types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View className="flex-1 p-2 max-w-[50%] bg-white rounded-2xl">
      <View className="max-w-[80%] mx-auto">
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          className="flex-1 aspect-square"
          resizeMode="contain"
        />
      </View>
      <Text className="text-sm font-semibold">{product.name}</Text>
      <Text className="mt-1 font-bold text-blue-400">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
