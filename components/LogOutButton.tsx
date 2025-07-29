import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { AuthContext } from "@/utils/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";

export function LogOutButton() {
  const authContext = useContext(AuthContext);
  const { addUser } = useUserStore();

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("name");
      authContext.logOut();
      addUser("");
    } catch {}
  };

  return (
    <Button
      size={"lg"}
      variant="destructive"
      onPress={() => logOut()}
      className="w-4/5 self-center"
    >
      <Text className="font-semibold">SAIR</Text>
    </Button>
  );
}
