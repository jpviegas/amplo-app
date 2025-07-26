import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { ImageSourcePropType, View } from "react-native";

type Props = {
  className?: string;
  title: string;
  sign?: boolean;
  icon?: ImageSourcePropType;
};

export default function ThemedCard({ className, title, icon, sign }: Props) {
  return (
    <Card className={cn("h-1/4 flex-row", className)}>
      <CardContent className="h-full justify-center">
        <View className="my-safe w-full flex-row justify-center">
          <View className="my-auto">
            <Image source={icon} style={styles.icon} />
          </View>
          <View className="ml-4 w-5/6">
            <Text className="mb-2 font-bold">{title}</Text>
            <View className="w-full flex-row justify-evenly">
              (
              {sign && (
                <View className="items-center">
                  <Image
                    source={require("@/assets/icons/assinar.png")}
                    style={styles.iconSM}
                  />
                  <Text className="text-base">Assinar</Text>
                </View>
              )}
              )
              <View className="items-center">
                <Image
                  source={require("@/assets/icons/visualizar.png")}
                  style={styles.iconSM}
                />
                <Text className="text-base">Visualizar</Text>
              </View>
              <View className="items-center">
                <Image
                  source={require("@/assets/icons/compartilhar.png")}
                  style={styles.iconSM}
                />
                <Text className="text-base">Compartilhar</Text>
              </View>
              <View className="items-center">
                <Image
                  source={require("@/assets/icons/baixar.png")}
                  style={styles.iconSM}
                />
                <Text className="text-base">Baixar</Text>
              </View>
            </View>
          </View>
        </View>
      </CardContent>
    </Card>
  );
}
