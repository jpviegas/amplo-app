import { Text } from "@/components/ui/text";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { Button } from "./ui/button";

export function LogOutButton() {
  const authContext = useContext(AuthContext);

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("name");
      authContext.logOut();
    } catch {}
  };

  return (
    <Button
      size={"lg"}
      variant="destructive"
      onPress={logOut}
      className="w-4/5 self-center"
    >
      <Text className="font-semibold">SAIR</Text>
    </Button>
  );
}
