import { Pressable } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Order } from "@/src/types";
import { Link, useSegments } from "expo-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable className="flex-row items-center justify-between p-3 bg-white rounded-lg">
        <View>
          <Text className="text-sm font-bold text-gray-800">
            Order #{order.id}
          </Text>
          <Text className="text-xs text-gray-400">
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>
        <Text className="font-semibold text-blue-300">{order.status}</Text>
      </Pressable>
    </Link>
  );
};

export default OrderListItem;
