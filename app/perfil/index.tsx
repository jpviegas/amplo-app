import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { styles } from "@/styles/styles";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { View } from "react-native";

export default function Perfil() {
  const authContext = useContext(AuthContext);
  const { isDarkColorScheme } = useColorScheme();

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
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5 justify-evenly">
            <View className="mx-4 flex-row gap-4">
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/dadospessoais.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Dados Pessoais</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/documentos">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/documentos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Documentos</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/pagamento.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Pagamento Benefício</Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/ferias.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Ferias</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/pontoeletronico.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Ponto Eletronico</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Text className="text-center">-</Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/treinamento.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Área de Treinamento</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/aviso.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Aviso Comunicado</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/atendimento.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Atendimento Conecta</Text>
                  </View>
                </Link>
              </Card>
            </View>
          </View>
          <Button
            size={"full"}
            variant="destructive"
            onPress={logOut}
            className="w-4/5 self-center"
          >
            <Text className="font-semibold">SAIR</Text>
          </Button>
        </View>
      </View>
    </ThemedContainer>
  );
}
