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
} from "lucide-react-native";
import React, { useContext } from "react";
import { View } from "react-native";

export default function Pagamentos() {
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
                      Pagamento Benefícios
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/documentos/codigo-conduta">
                  <CardContent className="py-safe items-center justify-evenly">
                    <Files
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-sm">Holerite</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/documentos/politica-interna">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <CircleDollarSign
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-base">Vale Refeição</Text>
                  </CardContent>
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
                      Vale Alimentação
                    </Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/documentos/ficha-registro">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <Clock
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-lg">Vale Transporte</Text>
                  </CardContent>
                </Link>
              </Card>
              <Card className="flex-1">
                <Link href="/perfil/documentos/ficha-epi">
                  <CardContent className="py-safe w-full items-center justify-evenly">
                    <FileSignature
                      size={32}
                      color={isDarkColorScheme ? "white" : "black"}
                    />
                    <Text className="text-center text-base">
                      Informe de Rendimentos
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
