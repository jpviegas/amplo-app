import { Canvas, Path, Skia, SkPath } from "@shopify/react-native-skia";
import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Button } from "./ui/button";
import { Text } from "./ui/text";

export default function SignatureSkia() {
  const [paths, setPaths] = useState<SkPath[]>([]);
  const currentPathRef = useRef<SkPath>(Skia.Path.Make());

  const onDrawingStart = (event: any) => {
    const { locationX, locationY } = event.nativeEvent;
    currentPathRef.current = Skia.Path.Make();
    currentPathRef.current.moveTo(locationX, locationY);
    setPaths([...paths, currentPathRef.current]);
  };

  const onDrawingActive = (event: any) => {
    const { locationX, locationY } = event.nativeEvent;
    if (paths.length > 0) {
      const lastPath = paths[paths.length - 1];
      lastPath.lineTo(locationX, locationY);
      setPaths([...paths.slice(0, -1), lastPath]);
    }
  };

  const clearSignature = () => {
    setPaths([]);
    currentPathRef.current = Skia.Path.Make();
  };

  const undoLastGesture = () => {
    if (paths.length > 0) {
      setPaths(paths.slice(0, -1));
    }
  };

  return (
    <View className="flex-1">
      <View
        className="mx-1 flex-1 bg-white"
        onStartShouldSetResponder={() => true}
        onResponderGrant={onDrawingStart}
        onResponderMove={onDrawingActive}
      >
        <Canvas style={{ flex: 1 }}>
          {paths.map((path, index) => (
            <Path
              key={index}
              path={path}
              strokeWidth={3}
              style="stroke"
              color="#000000"
            />
          ))}
        </Canvas>
      </View>

      <View className="flex-row justify-around p-2.5">
        <Button>
          <Text>Salvar</Text>
        </Button>
        <Button onPress={undoLastGesture}>
          <Text>Desfazer</Text>
        </Button>
        <Button onPress={clearSignature}>
          <Text>Limpar</Text>
        </Button>
      </View>
    </View>
  );
}
