import { View, Pressable, Text } from "react-native";

interface ButtonProps {
  label: string;
}
export const Button = ({ label }: ButtonProps) => {
  return (
    <View>
      <Pressable onPress={() => alert("You pressed a button.")}>
        <Text className="text-white">{label}</Text>
      </Pressable>
    </View>
  );
};
