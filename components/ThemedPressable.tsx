import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: string;
};

export default function ThemedPressable({ label, theme }: Props) {
  return (
    <View
      className={`mx-5 h-16 w-80 items-center justify-center ${theme === "primary" ? "bg-primary" : "bg-secondary"} p-1`}
    >
      <Pressable className="h-full w-full flex-row items-center justify-center rounded-lg">
        <Text className="text-base text-white">{label}</Text>
      </Pressable>
    </View>
  );
}
