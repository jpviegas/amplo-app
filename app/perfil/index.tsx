import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";

export default function Perfil() {
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
      <View className="h-full w-4/5 justify-evenly">
        <Link asChild href="/perfil/dadospessoais">
          <Button size={"full"}>
            <Text>Dados Pessoais</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/folha">
          <Button size={"full"}>
            <Text>Folha de Pagamento</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/documentos">
          <Button size={"full"}>
            <Text>Documentos</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/baterponto">
          <Button size={"full"}>
            <Text>Bater Ponto</Text>
          </Button>
        </Link>
        {/* <Link asChild href="/" replace> */}
        <Button size={"full"} variant="destructive" onPress={logOut}>
          <Text>Sair</Text>
        </Button>
        {/* </Link> */}
      </View>
    </ThemedContainer>
  );
}
