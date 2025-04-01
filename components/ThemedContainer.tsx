import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.JSX.Element[];
};

export default function ThemedContainer({ children }: Props) {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-evenly">
      {children}
    </SafeAreaView>
  );
}
