import Button from "@/src/components/Forms/Button";
import { defaultPizzaImage } from "@/src/components/Product/ProductListItem";
import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateFields = () => {
    setErrors("");

    if (!name) {
      setErrors("Name is required.");
      return false;
    }

    if (!price) {
      setErrors("Price is required.");
      return false;
    }

    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number.");
      return false;
    }

    return true;
  };

  const onCreate = () => {
    if (!validateFields()) {
      return;
    }

    console.warn("Creating Product:", name, "Price:", price);

    // Save in the database
    resetFields();
  };
  return (
    <View className="justify-center flex-1 p-3">
      <Image
        source={{ uri: defaultPizzaImage }}
        className="self-center w-[50%] aspect-square"
      />
      <Text className="self-center my-[10px] font-bold text-blue-500">
        Select an Image
      </Text>

      <Text className="text-gray-600 text-[16px]">Product Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Whats is the product name?"
        placeholderTextColor="gray"
        className="p-2 mt-1 mb-5 bg-white border border-gray-200 rounded-md"
      />

      <Text className="text-gray-600 text-[16px]">Product Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        placeholderTextColor="gray"
        className="p-2 mt-1 mb-1 bg-white border border-gray-200 rounded-md"
        keyboardType="numeric"
      />
      <Text className="self-center text-xs text-red-600">{errors}</Text>
      <Button text="Create" onPress={onCreate} />
    </View>
  );
};

export default CreateProductScreen;
