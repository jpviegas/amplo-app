import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.JSX.Element[];
};

export default function Container({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "rgba(46 57 84 / 0.1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
