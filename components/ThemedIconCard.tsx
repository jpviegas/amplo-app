import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { Link } from "expo-router";

import { ImageSourcePropType, View } from "react-native";

type Props = {
  className?: string;
  link: string;
  title: string;
  icon: ImageSourcePropType;
};

export default function ThemedIconCard({
  className,
  link,
  title,
  icon,
}: Props) {
  return (
    <Card className={cn("flex-1", className)}>
      <Link href={link}>
        <View className="h-full w-full items-center justify-center">
          <Image source={icon} style={styles.icon} />
          <Text className="text-center text-base">{title}</Text>
        </View>
      </Link>
    </Card>
  );
}
