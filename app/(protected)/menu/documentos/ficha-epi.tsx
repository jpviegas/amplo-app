import BackButton from "@/components/BackButton";
import ThemedCard from "@/components/ThemedCard";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

export default function FichaEPI() {
  return (
    <ThemedContainer title="Ficha de E.P.I.">
      <View className="mx-4 h-4/5 gap-4">
        <ThemedCard
          title="Ficha de E.P.I."
          icon={require("@/assets/icons/epi.png")}
          className="mt-6"
        />
        <Card>
          <CardContent className="flex-row justify-between py-1">
            <View>
              <Text>Bota de Segurança</Text>
              <Text>CA:00000</Text>
            </View>
            <View>
              <Text>00/00/000</Text>
              <Text>00/00/000</Text>
            </View>
            <View className="flex-row items-center">
              <Image
                source={require("@/assets/icons/assinar.png")}
                style={styles.iconSM}
              />
              <Image
                source={require("@/assets/icons/check.png")}
                style={{ height: 12, width: 12, marginBottom: -20 }}
              />
            </View>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex-row justify-between py-1">
            <View>
              <Text>Luva de Borracha</Text>
              <Text>CA:00000</Text>
            </View>
            <View>
              <Text>00/00/000</Text>
              <Text>00/00/000</Text>
            </View>
            <View className="flex-row items-center">
              <Image
                source={require("@/assets/icons/assinar.png")}
                style={styles.iconSM}
              />
              <Image
                source={require("@/assets/icons/cancel.png")}
                style={{ height: 12, width: 12, marginBottom: -20 }}
              />
            </View>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex-row justify-between py-1">
            <View>
              <Text>Luva de Borracha</Text>
              <Text>CA:00000</Text>
            </View>
            <View>
              <Text>00/00/000</Text>
              <Text>00/00/000</Text>
            </View>
            <View className="flex-row items-center">
              <Image
                source={require("@/assets/icons/assinar.png")}
                style={styles.iconSM}
              />
              <Image
                source={require("@/assets/icons/cancel.png")}
                style={{ height: 12, width: 12, marginBottom: -20 }}
              />
            </View>
          </CardContent>
        </Card>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
