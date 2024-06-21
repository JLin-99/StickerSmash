import { Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, ImageViewer } from "@/components";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function HomeScreen() {
  return (
    <View className="items-center justify-center flex-1 flex flex-col gap-12 bg-[#25292e] text-white">
      <View className="pt-16">
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View className="flex flex-col gap-6 w-80">
        <Button label="Choose a photo" />
        <Button label="User this photo" variant="secondary" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
