import { Button, Text, View } from "react-native";

export const SobreScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sou o çobry 🚒</Text>
      <Button
        title="Vá para laaa "
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};