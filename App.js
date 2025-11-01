import { Text, View } from "react-native";
import Calculator from "./src/pages/calculator/index";
import { styles } from "./src/pages/calculator/styles.jsx";

//Função principal do app, que retorna os componentes visuais
export default function App() {
  return (


    <View style={styles.container}>
      <Text>Calculator-App</Text>
      <Calculator/>
    </View>

  );
}

