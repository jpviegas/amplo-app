import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Registrar() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync();

      if (coords) {
        console.log("coords:", coords);
        setLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        let response = await Location.reverseGeocodeAsync({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        console.log("response:", response);
      }
    }

    getCurrentLocation();
  }, []);

  function handlePoint() {
    console.log(location);
  }

  return (
    <View style={styles.container}>
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
        style={StyleSheet.absoluteFill}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
      <Card className="absolute bottom-0 w-full">
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "75%",
  },
});
