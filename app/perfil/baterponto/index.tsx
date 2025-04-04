import ThemedContainer from "@/components/ThemedContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import * as Location from "expo-location";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function BaterPonto() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  function handlePoint() {
    console.log(location);
  }

  return (
    <ThemedContainer>
      <View className="h-full w-4/5 justify-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Registro do ponto</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <Text>Ative a localização para registrar o ponto.</Text>
            <Button
              size={"full"}
              disabled={location ? false : true}
              onPress={() => handlePoint()}
            >
              <Text>Bater Ponto</Text>
            </Button>
            {errorMsg && <Text>{errorMsg}</Text>}
          </CardContent>
        </Card>
        <Link asChild href="/perfil/baterponto/registro">
          <Button size={"full"}>
            <Text>Registro do ponto</Text>
          </Button>
        </Link>
        <Link asChild href="/perfil/baterponto/registro">
          <Button size={"full"}>
            <Text>Incluir solicitação</Text>
          </Button>
        </Link>
      </View>
    </ThemedContainer>
  );
}
