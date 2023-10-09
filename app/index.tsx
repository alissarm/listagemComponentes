import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/telaA">Tela de cadastro</Link>
      <Link href="/telaB">Tela de armazenamento de dados</Link>

      <StatusBar style="auto" />
    </View>
  );
};
