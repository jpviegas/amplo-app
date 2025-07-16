import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Pagamentos() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 items-center justify-between gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-between bg-primary dark:bg-black">
          <Text className="text-center text-4xl font-bold">
            Pagamento Benefícios
          </Text>
          <View className="h-full justify-evenly">
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos/contrato-trabalho">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/registrarponto.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">Holerite</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/codigo-conduta">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/refeicao.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">Vale Refeição</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/politica-interna">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/valealimentacao.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Vale Alimentação
                    </Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos/ficha-registro">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/transporte.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Vale Transporte
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/ficha-epi">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/rendimentos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Informe de Rendimentos
                    </Text>
                  </View>
                </Link>
              </Card>
              <View className="flex-1"></View>
            </View>
            <View className="mx-4 h-1/6 flex-row gap-4"></View>
            <BackButton />
          </View>
        </View>
      </View>
    </ThemedContainer>
  );
}
