import { FontAwesome } from "@expo/vector-icons";
import { View, Pressable, Text } from "react-native";
import { twMerge } from "tailwind-merge";

const BUTTON_VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

type ButtonVariant = (typeof BUTTON_VARIANT)[keyof typeof BUTTON_VARIANT];

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
}
export const Button = ({
  label,
  variant = BUTTON_VARIANT.PRIMARY,
}: ButtonProps) => {
  return (
    <View>
      <Pressable
        onPress={() => alert("You pressed a button.")}
        className={twMerge(
          "flex items-center flex-row p-4 gap-3 rounded-lg justify-center w-full",
          variant === BUTTON_VARIANT.PRIMARY && "bg-white"
        )}
      >
        {variant === BUTTON_VARIANT.PRIMARY && (
          <FontAwesome name="picture-o" className="size-4" color="#25292e" />
        )}
        <Text
          className={twMerge(
            variant === BUTTON_VARIANT.PRIMARY && "text-[#25292e]",
            variant === BUTTON_VARIANT.SECONDARY && "text-white"
          )}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
