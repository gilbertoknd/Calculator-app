import { StyleSheet, Text, View } from 'react-native';

//Função principal do app, que retorna os componentes visuais
export default function App() {
  return (
    //A View é um contêiner para outros componentes, como uma div no HTML, 
    //O estilo é aplicado via StyleSheet
    <View style={styles.container}>
      {/*Text é um componente para exibir texto, semelhante a um parágrafo no HTML, 
      Os comentários dentro do JSX são feitos dessa forma, dentro de chaves */}
      <Text>Calculator App</Text>
      
    </View>
  );
}

//Estilos, parecido com a abordagem do CSS
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
