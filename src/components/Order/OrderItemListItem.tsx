import { OrderItem } from "@/src/types";
import { Text, View } from "react-native";

type OrderItemListItemProps = {
  item: OrderItem;
};

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View className="flex-row items-center justify-between p-3 bg-white rounded-lg">
      <Text>Here comes the items</Text>
    </View>
  );
};

export default OrderItemListItem;
