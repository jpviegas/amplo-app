import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import {
  CircleDollarSign,
  CircleUser,
  Clock,
  Files,
  FileSignature,
  MessageSquareText,
} from "lucide-react-native";
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
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <CircleUser
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-xl">Dados Pessoais</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/assinatura">
                  <CardContent className="py-safe items-center justify-evenly">
                    <Files
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-sm">Documentos</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <CircleDollarSign
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-base">Pagamento Benefício</Text>
                  </CardContent>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-xl">Férias</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/baterponto">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <Clock
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-lg">
                      Ponto Eletrônico
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/assinatura">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-base">
                      Assinatura Eletrônica
                    </Text>
                  </CardContent>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="/perfil/folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">
                      Área de Treinamento
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <MessageSquareText
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">
                      Aviso Comunicado
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">
                      Atendimento Conecta
                    </Text>
                  </CardContent>
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
            <Text>Sair</Text>
          </Button>
        </View>
      </View>
    </ThemedContainer>
  );
}
