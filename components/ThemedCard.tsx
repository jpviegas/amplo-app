import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ImageSourcePropType, View } from "react-native";

type Props = {
  link: string;
  title: string;
  icon: ImageSourcePropType;
};

export default function ThemedCard({ link, title, icon }: Props) {
  return (
    <Card className="flex-1">
      <Link href={link}>
        <View className="h-full w-full items-center justify-center">
          <Image source={icon} style={styles.icon} />
          <Text className="text-center text-base">{title}</Text>
        </View>
      </Link>
    </Card>
  );
}
