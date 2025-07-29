import ImageViewer from "@/components/ImageViewer";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";
import { Link, Redirect } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUserStore();

  if (user) {
    return <Redirect href={"/menu"} />;
  }

  return (
    <SafeAreaView className="flex flex-1 items-center justify-center bg-black/5">
      <View className="h-4/5 w-11/12 justify-around gap-4">
        <Text className="text-center text-2xl font-bold text-primary">
          Acesse sua conta
        </Text>
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View className="gap-4">
          <Link href={"/login"} asChild>
            <Button className="mt-5 w-4/5 self-center" size={"full"}>
              <Text>ENTRAR</Text>
            </Button>
          </Link>
          <Link href={"/primeiro-acesso"} asChild>
            <Button
              className="mt-5 w-4/5 self-center bg-inherit"
              size={"full"}
              variant={"outline"}
            >
              <Text className="text-primary">PRIMEIRO ACESSO</Text>
            </Button>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
