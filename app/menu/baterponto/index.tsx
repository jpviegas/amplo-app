import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";

export default function BaterPonto() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <Text className="text-center text-4xl font-bold">
            Ponto Eletrônico
          </Text>
          <View className="h-4/5">
            <View className="mx-4 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/baterponto/registrar">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/registrarponto.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Registrar Ponto</Text>
                  </View>
                </Link>
              </Card>
              <View className="flex-1"></View>
              <View className="flex-1"></View>
            </View>
          </View>
          <BackButton />
        </View>
      </View>
    </ThemedContainer>
  );
}
