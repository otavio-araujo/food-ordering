import { OrderItem } from "@/src/types";
import { Image, Text, View } from "react-native";
import { defaultPizzaImage } from "../Product/ProductListItem";

type OrderItemListItemProps = {
  item: OrderItem;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View className="flex-row items-center p-3 bg-white rounded-lg">
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        className="w-20 aspect-square"
        resizeMode="contain"
      />
      <View className="ml-3 gap-y-1">
        <Text className="text-[16px] font-bold text-gray-800">
          {item.products.name}
        </Text>
        <View className="flex-row gap-x-2">
          <Text className="font-bold text-blue-500">
            ${item.products.price}
          </Text>
          <Text className="font-medium text-gray-800">Size: {item.size}</Text>
        </View>
      </View>
      <Text className="ml-auto text-xl font-bold text-gray-800">
        {item.quantity}
      </Text>
    </View>
  );
};

export default OrderItemListItem;
