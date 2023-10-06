import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Link href="/telaA">Ir para a tela de cadastro</Link>
      <Link href="/telaB">Ir para a tela de armazenamento de dados</Link>

      <StatusBar style="auto" />
    </View>
  );
};