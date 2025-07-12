import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { styles } from "@/styles/styles";
import { AuthContext } from "@/utils/authContext";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { CircleUser, FileSignature } from "lucide-react-native";
import React, { useContext } from "react";
import { View } from "react-native";

export default function Documentos() {
  const authContext = useContext(AuthContext);
  const { isDarkColorScheme } = useColorScheme();

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
                <Link href="/perfil/documentos/contrato-trabalho">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <CircleUser
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-xl">
                      Contrato de Trabalho
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/conduta.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Código de Conduta</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/politica.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Ficha de E.P.I.</Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/documentos/declaracao">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-xl">
                      Declaração I.R.R.F.
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/ficha.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Ficha de Registro</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/epi.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Ficha de E.P.I.</Text>
                  </View>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/saude.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Saúde Ocupacional</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/termos.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Termos</Text>
                  </View>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/dadospessoais">
                  <View className="py-safe w-full items-center">
                    <Image
                      source={require("@/assets/icons/arquivo.png")}
                      style={styles.icon}
                    />
                    <Text className="text-center">Demais Documentos</Text>
                  </View>
                </Link>
              </Card>
            </View>
          </View>
          <Link asChild href={".."}>
            <Button
              size={"full"}
              variant="outline"
              className="w-4/5 self-center"
            >
              <Text>Voltar</Text>
            </Button>
          </Link>
        </View>
      </View>
    </ThemedContainer>
  );
}
