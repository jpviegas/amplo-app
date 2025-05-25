// import * as FileSystem from "expo-file-system";
import React, { useEffect, useRef, useState } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import SignatureScreen from "react-native-signature-canvas";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "WebView has been extracted from react-native core",
]);

export default function SignaturePad() {
  const [isReady, setIsReady] = useState(false);
  const signatureRef = useRef(null);
  const [signatureKey, setSignatureKey] = useState(1);

  useEffect(() => {
    console.log("SignaturePad renderizado", signatureKey);

    const timer = setTimeout(() => {
      setIsReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [signatureKey]);

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

  const handleSignature = async (signature: any) => {
    console.log("Assinatura capturada");
    console.log(signature);

    try {
      if (!signature || signature === "") {
        alert("Por favor, forneça uma assinatura válida");
        return;
      }
      // const path = `${FileSystem.documentDirectory}signature.png`;
      // const imageData = signature.replace(/^data:image\/(png|jpg);base64,/, "");

      // await FileSystem.writeAsStringAsync(path, imageData, {
      //   encoding: FileSystem.EncodingType.Base64,
      // });

      // console.log("Assinatura salva em:", path);
      alert("Assinatura salva com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar assinatura:", error);
      alert("Erro ao salvar assinatura. Por favor, tente novamente.");
    }
  };

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
    overflow: "hidden",
  },
});
