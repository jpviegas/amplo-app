import * as FileSystem from "expo-file-system";
import React, { useEffect, useRef, useState } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

// Ignora avisos específicos que podem ocorrer em produção
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "WebView has been extracted from react-native core",
]);

export default function SignaturePad() {
  // Estado para verificar se o componente está pronto
  const [isReady, setIsReady] = useState(false);
  const signatureRef = useRef(null);
  const [signatureKey, setSignatureKey] = useState(1);

  // Força a remontagem do componente quando a tela for focada
  useEffect(() => {
    console.log("SignaturePad renderizado", signatureKey);

    // Simula um tempo para garantir que o componente esteja pronto
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [signatureKey]);

  // Este estilo garante que o componente de assinatura seja renderizado corretamente
  const style = `.m-signature-pad {
    border: none;
    box-shadow: none;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .m-signature-pad--footer {
    display: flex;
    margin-top: 10px;
  }`;

  // Esta função é chamada quando o usuário termina de assinar
  const handleSignature = async (signature: any) => {
    console.log("Assinatura capturada");
    console.log(signature);

    try {
      // Verifica se a assinatura é válida
      if (!signature || signature === "") {
        alert("Por favor, forneça uma assinatura válida");
        return;
      }

      // Converte a URI base64 em um arquivo
      const path = `${FileSystem.documentDirectory}signature.png`;
      const imageData = signature.replace(/^data:image\/(png|jpg);base64,/, "");

      await FileSystem.writeAsStringAsync(path, imageData, {
        encoding: FileSystem.EncodingType.Base64,
      });

      console.log("Assinatura salva em:", path);
      alert("Assinatura salva com sucesso!");

      // Pode adicionar código para compartilhar ou usar a imagem
      // Por exemplo, enviá-la para um servidor ou compartilhá-la
    } catch (error) {
      console.error("Erro ao salvar assinatura:", error);
      alert("Erro ao salvar assinatura. Por favor, tente novamente.");
    }
  };

  // Esta função limpa a tela de assinatura
  // const handleClear = () => {
  //   if (signatureRef.current) {
  //     signatureRef.current.clearSignature();
  //   }
  // };

  // Esta função força uma nova montagem do componente
  // const handleReset = () => {
  //   setSignatureKey((prevKey) => prevKey + 1);
  // };

  return (
    <View style={styles.container}>
      {!isReady ? (
        <View style={styles.loadingContainer}>
          <Text>Carregando pad de assinatura...</Text>
        </View>
      ) : (
        <View style={styles.signatureContainer} key={signatureKey}>
          <SignatureScreen
            ref={signatureRef}
            onOK={handleSignature}
            onEmpty={() => alert("Por favor, forneça uma assinatura")}
            descriptionText="Assine aqui"
            clearText="Limpar"
            confirmText="Salvar"
            webStyle={style}
            autoClear={false}
            imageType="image/png"
            penColor={"#000000"}
            dotSize={5}
            minWidth={3}
            maxWidth={7}
            // canvasProps={{}}
            // showNativeButtons={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10,
  },
  signatureContainer: {
    flex: 1,
    maxHeight: "auto",
    backgroundColor: "#FFFFFF",
    overflow: "hidden", // Evita que o conteúdo transborde
  },
});
