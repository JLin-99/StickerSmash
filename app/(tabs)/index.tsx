import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, ImageViewer } from "@/components";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState("");

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View className="items-center justify-center flex-1 flex flex-col gap-12 bg-[#25292e] text-white">
      <View className="pt-16">
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View className="flex flex-col gap-6 w-80">
        <Button label="Choose a photo" onPress={pickImageAsync} />
        <Button label="User this photo" variant="secondary" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
