import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";


export const HomeScreen = ({navigation}) => {
  return (
    <View
        style={styles.container}
    >
      <Text>Oi Eu sou A roumi eskrym</Text>
      <Button
        title="Ir para çobry"
        // Realiza a ação de enviar para tela Sobre
        onPress={() => navigation.navigate("Sobre")}
      />
    </View>
  );
};