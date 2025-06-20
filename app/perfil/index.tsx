import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { FileSignature, FileText, MapPin, User } from "lucide-react-native";
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
      <View className="h-full w-4/5 justify-evenly gap-4">
        <Card className="flex-1 justify-center">
          <Link href="/perfil/dadospessoais">
            <CardContent className="flex-row gap-8">
              <User size={32} color={isDarkColorScheme ? "white" : "black"} />
              <Text className="align-middle text-xl">DADOS PESSOAIS</Text>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex-1 justify-center">
          <Link href="/perfil/folha">
            <CardContent className="flex-row gap-8">
              <FileText
                size={32}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Text className="align-middle text-xl">FOLHA DE PAGAMENTO</Text>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex-1 justify-center">
          <Link href="/perfil/documentos">
            <CardContent className="flex-row gap-8">
              <FileSignature
                size={32}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Text className="align-middle text-xl">DOCUMENTOS</Text>
            </CardContent>
          </Link>
        </Card>
        <Card className="flex-1 justify-center">
          <Link href="/perfil/baterponto">
            <CardContent className="flex-row gap-8">
              <MapPin size={32} color={isDarkColorScheme ? "white" : "black"} />
              <Text className="align-middle text-xl">BATER PONTO</Text>
            </CardContent>
          </Link>
        </Card>
        <Button
          size={"full"}
          variant="destructive"
          onPress={logOut}
          className="mb-6 w-4/5 self-center"
        >
          <Text>Sair</Text>
        </Button>
      </View>
    </ThemedContainer>
  );
}
