import Button from "@/src/components/Forms/Button";
import { defaultPizzaImage } from "@/src/components/Product/ProductListItem";
import { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="justify-center flex-1 p-3">
      <Stack.Screen
        options={{ title: "Create Product", headerTitleAlign: "center" }}
      />

      <Image
        source={{ uri: image || defaultPizzaImage }}
        className="self-center w-[50%] aspect-square"
      />
      <Text
        className="self-center my-[10px] font-bold text-blue-500"
        onPress={pickImage}
      >
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
