import BackButton from "@/components/BackButton";
import ThemedContainer from "@/components/ThemedContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function EspelhoAno() {
  const { ano, mes } = useLocalSearchParams();

  return (
    <ThemedContainer title="Espelho de Ponto">
      <View className="mt-6 h-3/4 justify-around">
        <View className="mx-4 h-full flex-col gap-4">
          <Card className="w-fit self-center">
            <CardHeader>
              <CardTitle>
                <Text className="">
                  {mes}/{ano}
                </Text>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1">
            <CardContent>
              <ScrollView bounces={false}>
                <Table>
                  <TableHeader>
                    <TableRow className="gap-0.5">
                      <TableHead>
                        <Text>DATA</Text>
                      </TableHead>
                      <TableHead>
                        <Text>ENT</Text>
                      </TableHead>
                      <TableHead>
                        <Text>SAÍDA</Text>
                      </TableHead>
                      <TableHead>
                        <Text>ENT</Text>
                      </TableHead>
                      <TableHead>
                        <Text>SAÍDA</Text>
                      </TableHead>
                      <TableHead>
                        <Text>TOTAL HR</Text>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-0">
                      <TableCell>
                        <Text>01/05</Text>
                      </TableCell>
                      <TableCell>
                        <Text>07:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>12:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>13:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>16:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>08:00</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-0">
                      <TableCell>
                        <Text>02/05</Text>
                      </TableCell>
                      <TableCell>
                        <Text>07:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>12:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>13:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>16:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>08:00</Text>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-0">
                      <TableCell>
                        <Text>03/05</Text>
                      </TableCell>
                      <TableCell>
                        <Text>07:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>12:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>13:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>16:00</Text>
                      </TableCell>
                      <TableCell>
                        <Text>08:00</Text>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollView>
            </CardContent>
          </Card>
        </View>
      </View>
      <BackButton />
    </ThemedContainer>
  );
}
