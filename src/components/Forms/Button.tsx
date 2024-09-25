import { Pressable, Text, View } from "react-native";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        className="items-center p-4 mt-3 bg-blue-500 rounded-full"
      >
        <Text className="text-[16px] font-semibold text-white">{text}</Text>
      </Pressable>
    );
  }
);

export default Button;
