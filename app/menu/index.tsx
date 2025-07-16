import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { styles } from "@/styles/styles";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { View } from "react-native";

export default function menu() {
  const authContext = useContext(AuthContext);

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("name");
      authContext.logOut();
      // return router.replace("/");
    } catch {
      // return router.replace("/");
    }
  };

  return (
    <ThemedContainer>
      <View className="w-full flex-1 items-center justify-between gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="w-full flex-1 justify-between bg-primary dark:bg-black">
          <Text className="text-center text-4xl font-bold">Menu Principal</Text>
          <View className="h-full justify-evenly">
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/dadospessoais">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/dadospessoais.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Dados Pessoais
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/documentos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">Documentos</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/pagamentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/pagamento.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Pagamento Benefício
                    </Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/ferias.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">Férias</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/baterponto">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/pontoeletronico.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Ponto Eletrônico
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/treinamento.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Área de Treinamento
                    </Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="mx-4 h-1/6 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/menu/documentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/aviso.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Aviso Comunicado
                    </Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/menu/documentos">
                  <View className="h-full w-full items-center justify-center">
                    <Image
                      source={require("@/assets/icons/arquivo.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center text-base">
                      Atendimento Conecta
                    </Text>
                  </View>
                </Link>
              </Card>
              <View className="flex-1"></View>
            </View>
            <Button
              size={"lg"}
              variant="destructive"
              onPress={logOut}
              className="w-4/5 self-center"
            >
              <Text className="font-semibold">SAIR</Text>
            </Button>
          </View>
        </View>
      </View>
    </ThemedContainer>
  );
}
