import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { AuthContext } from "@/utils/authContext";
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
                <Link href="./dadospessoais">
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
                <Link href="./documentos">
                  <CardContent className="py-safe items-center justify-evenly">
                    <Files
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-sm">Código de Conduta</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="./folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <CircleDollarSign
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-base">Política Interna</Text>
                  </CardContent>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="./folha">
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
                <Link href="./baterponto">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <Clock
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-lg">
                      Ficha de Registro
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="./assinatura">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-base">
                      Ficha de E.P.I.
                    </Text>
                  </CardContent>
                </Link>
              </Card>
            </View>
            <View className="flex-row gap-4 px-4">
              <Card className="flex-1">
                <Link href="./folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">
                      Saúde Ocupacional
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="./folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <MessageSquareText
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">Termos</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="./folha">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-sm">
                      Demais Documentos
                    </Text>
                  </CardContent>
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
