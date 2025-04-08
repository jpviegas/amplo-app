import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import * as Device from "expo-device";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Registrar() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      if (Platform.OS === "android" && !Device.isDevice) {
        setErrorMsg(
          "Oops, this will not work on Snack in an Android Emulator. Try it on your device!",
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão para acessar a localização foi negada.");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync();
      if (coords) {
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      }
    }

    getCurrentLocation();
  }, []);

  let text = "Aguarde...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function handlePoint() {
    console.log(location);
  }

  return (
    <View className="flex-1 items-center justify-center">
      {location.latitude === 0 ? (
        <Text>Ative a localização para registrar o ponto.</Text>
      ) : (
        <MapView
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="object-cover"
          style={StyleSheet.absoluteFill}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
      <Card className="absolute bottom-0 w-full">
        <CardHeader>
          <CardTitle>Registro do ponto</CardTitle>
        </CardHeader>
        <CardContent className="gap-4">
          <Text>{location.latitude === 0 ? "Aguarde..." : errorMsg}</Text>
          <Button
            size={"full"}
            disabled={location.latitude === 0 ? true : false}
            onPress={() => handlePoint()}
          >
            <Text>Bater Ponto</Text>
          </Button>
        </CardContent>
      </Card>
    </View>
  );
}
