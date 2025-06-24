import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Eye, EyeOff, LockKeyhole } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function CriarSenha() {
  const { isDarkColorScheme } = useColorScheme();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [securePass, setSecurePass] = useState(true);
  const insets = useSafeAreaInsets();

  async function createPassword({
    password1,
    password2,
  }: {
    password1: string;
    password2: string;
  }) {
    try {
      if (password1 === password2) {
        Toast.show({
          text1: "Senha criada com sucesso!",
          topOffset: insets.top === 0 ? 12 : insets.top,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Erro ao tentar criar senha!",
          topOffset: insets.top === 0 ? 12 : insets.top,
        });
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao tentar criar senha!",
        topOffset: insets.top === 0 ? 12 : insets.top,
      });
    }
  }

  return (
    <ThemedContainer>
      <View className="h-4/5 w-11/12 justify-around gap-4">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/splash.png")} />
        </View>
        <View>
          <View className="mb-4">
            <Text>CRIAR SENHA</Text>
            <View className="mb-2 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
              <LockKeyhole
                size={24}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Input
                className="w-4/5 border-0 bg-inherit"
                textContentType="password"
                placeholder="digite sua senha"
                value={password1}
                secureTextEntry={securePass}
                onChangeText={(e) => setPassword1(e)}
              />
              {securePass ? (
                <Eye
                  size={24}
                  color={isDarkColorScheme ? "white" : "black"}
                  onPress={() => setSecurePass(!securePass)}
                  className="absolute right-[-10] top-1.5"
                />
              ) : (
                <EyeOff
                  size={24}
                  color={isDarkColorScheme ? "white" : "black"}
                  onPress={() => setSecurePass(!securePass)}
                  className="absolute left-10 top-1.5"
                />
              )}
            </View>
          </View>
          <View className="mb-4">
            <Text>DIGITE NOVAMENTE</Text>
            <View className="mb-2 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
              <LockKeyhole
                size={24}
                color={isDarkColorScheme ? "white" : "black"}
              />
              <Input
                className="w-4/5 border-0 bg-inherit"
                textContentType="password"
                placeholder="digite sua senha"
                value={password2}
                secureTextEntry={securePass}
                onChangeText={(e) => setPassword2(e)}
              />
              {securePass ? (
                <Eye
                  size={24}
                  color={isDarkColorScheme ? "white" : "black"}
                  onPress={() => setSecurePass(!securePass)}
                  className="absolute right-[-10] top-1.5"
                />
              ) : (
                <EyeOff
                  size={24}
                  color={isDarkColorScheme ? "white" : "black"}
                  onPress={() => setSecurePass(!securePass)}
                  className="absolute left-10 top-1.5"
                />
              )}
            </View>
          </View>
        </View>
        <View className="gap-4">
          <Button
            className="mt-5 w-4/5 self-center"
            size={"full"}
            onPress={() => createPassword({ password1, password2 })}
            disabled={
              password1.length < 2 && password2.length < 2 ? true : false
            }
          >
            <Text>Entrar</Text>
          </Button>
        </View>
      </View>
    </ThemedContainer>
  );
}
