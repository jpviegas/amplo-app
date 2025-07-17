import ImageViewer from "@/components/ImageViewer";
import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useColorScheme } from "@/lib/useColorScheme";
import { Link } from "expo-router";
import { Eye, EyeOff, LockKeyhole } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";

export default function AlterarSenha() {
  const { isDarkColorScheme } = useColorScheme();
  const [currentPassword, setCurrentPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [securePass, setSecurePass] = useState(true);

  return (
    <ThemedContainer>
      <View className="w-full flex-1 justify-evenly gap-2">
        <View className="items-center">
          <ImageViewer imgSource={require("@/assets/images/conecta.png")} />
        </View>
        <View className="w-full flex-1 justify-evenly bg-primary dark:bg-black">
          <View className="h-4/5">
            <View className="gap-4 px-4">
              <Text className="text-center text-2xl font-bold">
                Alterar Senha
              </Text>
              <View className="mb-4">
                <Text>SENHA ATUAL</Text>
                <View className="mb-2 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
                  <LockKeyhole
                    size={24}
                    color={isDarkColorScheme ? "white" : "black"}
                  />
                  <Input
                    className="w-4/5 border-0 bg-inherit"
                    textContentType="password"
                    placeholder="digite sua senha atual"
                    value={currentPassword}
                    secureTextEntry={securePass}
                    onChangeText={(e) => setCurrentPassword(e)}
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
                <Text>CRIE UMA NOVA SENHA</Text>
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
                <Text>CONFIRMAR A SENHA</Text>
                <View className="mb-2 w-full flex-row items-center gap-2 border-b-[1px] border-secondary-foreground">
                  <LockKeyhole
                    size={24}
                    color={isDarkColorScheme ? "white" : "black"}
                  />
                  <Input
                    className="w-4/5 border-0 bg-inherit"
                    textContentType="password"
                    placeholder="digite a senha nova"
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
