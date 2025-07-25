import ImageViewer from "@/components/ImageViewer";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.JSX.Element | React.JSX.Element[];
  title: string;
};

export default function ThemedContainer({ children, title }: Props) {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center bg-black/5">
      <View className="w-full flex-1 items-center justify-between gap-4">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 bg-primary">
          <Text className="mt-4 text-center text-4xl font-bold">{title}</Text>
          <View className="flex-1 justify-around">{children}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}
