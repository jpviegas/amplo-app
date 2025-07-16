import BackButton from "@/components/BackButton";
import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Documentos() {
  return (
    <ThemedContainer>
      <View className="w-full flex-1 items-center justify-between gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-between bg-primary dark:bg-black">
          <Text className="text-center text-4xl font-bold">Documentos</Text>
          <View className="h-full justify-evenly">
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos/contrato-trabalho">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/documentos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Contrato de Trabalho
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/codigo-conduta">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/conduta.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Código de Conduta
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/politica-interna">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/politica.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Política Interna
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
                      source={require("@/assets/icons/ficha.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Ficha de Registro
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/ficha-epi">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/epi.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Ficha de E.P.I.
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/saude-ocupacional">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/saude.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Saúde Ocupacional
                    </Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos/termos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/termos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">Termos</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos/diversos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/arquivo.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Demais Documentos
                    </Text>
                  </View>
                </Link>
              </Card>
              <View className="flex-1"></View>
            </View>
            <BackButton />
          </View>
        </View>
      </View>
    </ThemedContainer>
  );
}
