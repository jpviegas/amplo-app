import { Image, type ImageSource } from "expo-image";
import { StyleSheet, View } from "react-native";

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={imgSource}
        placeholder={"image"}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
  },
  image: {
    flex: 1,
  },
});
