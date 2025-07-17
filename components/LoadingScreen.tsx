import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";
import ImageViewer from "./ImageViewer";
import { Text } from "./ui/text";

export default function LoadingScreen() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startSpinning = () => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    };

    startSpinning();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"],
  });

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <View className="items-center">
        <View>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <ImageViewer imgSource={require("@/assets/images/logoout.png")} />
          </Animated.View>
          <View className="absolute">
            <ImageViewer imgSource={require("@/assets/images/logoin.png")} />
          </View>
        </View>
        <Text className="mt-4 text-lg">Carregando...</Text>
      </View>
    </View>
  );
}
