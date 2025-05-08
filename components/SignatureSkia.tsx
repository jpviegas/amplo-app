import { Canvas, Group, Path } from "@shopify/react-native-skia";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function SignatureSkia() {
  const canvasRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [currentPoints, setCurrentPoints] = useState([]);
  const [isSigning, setIsSigning] = useState(false);

  // Função para criar um SVG path a partir de pontos
  const getSvgPath = (points) => {
    if (points.length < 2) return "";

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }

    return path;
  };

  // Evento quando o usuário toca na tela
  const handleTouchStart = (event) => {
    if (event.nativeEvent.touches.length !== 1) return;

    const touch = event.nativeEvent.touches[0];
    const point = { x: touch.locationX, y: touch.locationY };

    setCurrentPoints([point]);
    setIsSigning(true);
  };

  // Evento quando o usuário move o dedo na tela
  const handleTouchMove = (event) => {
    if (!isSigning || event.nativeEvent.touches.length !== 1) return;

    const touch = event.nativeEvent.touches[0];
    const newPoint = { x: touch.locationX, y: touch.locationY };

    setCurrentPoints((prevPoints) => [...prevPoints, newPoint]);
  };

  // Evento quando o usuário levanta o dedo da tela
  const handleTouchEnd = () => {
    if (!isSigning) return;

    if (currentPoints.length > 1) {
      const newPath = {
        id: Date.now().toString(),
        points: [...currentPoints],
      };

      setPaths((prevPaths) => [...prevPaths, newPath]);
    }

    setCurrentPoints([]);
    setIsSigning(false);
  };

  // Limpar a assinatura
  const handleClear = () => {
    setPaths([]);
    setCurrentPoints([]);
    setIsSigning(false);
  };

  // Salvar a assinatura
  const handleSave = async () => {
    try {
      // Verifique se há algo para salvar
      if (paths.length === 0) {
        alert("Por favor, assine antes de salvar.");
        return;
      }

      // No Expo, podemos usar o método makeImageSnapshot do Skia
      if (canvasRef.current?.makeImageSnapshot) {
        const image = await canvasRef.current.makeImageSnapshot();
        if (image) {
          // Você pode salvar como base64
          const base64 = image.encodeToBase64();
          console.log("Base64 da assinatura:", base64.substring(0, 30) + "...");
          alert("Assinatura salva com sucesso!");

          // Implementar código para salvar a imagem ou enviá-la para o servidor
          // Exemplo: enviarParaServidor(base64);
        }
      } else {
        console.warn(
          "makeImageSnapshot não está disponível na referência do canvas",
        );

        // Alternativa: salvar apenas os dados dos caminhos
        const signatureData = JSON.stringify(paths);
        console.log(
          "Dados da assinatura:",
          signatureData.substring(0, 30) + "...",
        );
        alert("Dados da assinatura salvos com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao salvar assinatura:", error);
      alert("Ocorreu um erro ao salvar a assinatura.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assinatura Digital</Text>
      </View>

      <View
        style={styles.canvasContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Canvas ref={canvasRef} style={styles.canvas}>
          <Group>
            {/* Desenha os caminhos salvos */}
            {paths.map((path) => (
              <Path
                key={path.id}
                path={getSvgPath(path.points)}
                strokeWidth={2.5}
                style="stroke"
                strokeJoin="round"
                strokeCap="round"
                color="#000000"
              />
            ))}

            {/* Desenha o caminho atual */}
            {currentPoints.length > 1 && (
              <Path
                path={getSvgPath(currentPoints)}
                strokeWidth={2.5}
                style="stroke"
                strokeJoin="round"
                strokeCap="round"
                color="#000000"
              />
            )}
          </Group>
        </Canvas>
        <View style={styles.border} />
      </View>

      <Text style={styles.instruction}>Assine acima</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleSave}
        >
          <Text style={[styles.buttonText, styles.primaryButtonText]}>
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  canvasContainer: {
    marginHorizontal: 20,
    height: height / 3,
    position: "relative",
  },
  canvas: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  border: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#666",
  },
  instruction: {
    textAlign: "center",
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
    minWidth: 120,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  primaryButtonText: {
    color: "#fff",
  },
});
