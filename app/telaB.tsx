import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {

  const dados= [
    {
        nome: "Bruno",
        cpf: "123.456.789-01",
        dataNasc: "30/10/1998",
        endereco: "Rua 123",
        telefone: "(00) 0 0000-1111",
        consulta: "10/09/2020",
        horario: "08:30",
        valor: "200"
    },
    {
        nome: "Carla",
        cpf: "098.765.432-10",
        dataNasc: "20/05/2000",
        endereco: "Rua 123",
        telefone: "(00) 0 0000-2222",
        consulta: "10/09/2020",
        horario: "09:30",
        valor: "200"
    },
    {
      nome: "Daniel",
      cpf: "123.654.789-10",
      dataNasc: "10/07/2002",
      endereco: "Rua 321",
      telefone: "(00) 0 0000-3333",
      consulta: "10/09/2020",
      horario: "10:30",
      valor: "200"
  }
  ]

return(
        <View style={styles.container}>
            <Text style={styles.title}>Dados dos pacientes</Text>

            <FlatList
            data={dados}
            renderItem={(
                ({item}) => (
                    <View style={styles.dados}>
                        <Text>Nome: {item.nome}</Text>
                        <Text>CPF: {item.cpf}</Text>
                        <Text>Data de nascimento: {item.dataNasc}</Text>
                        <Text>Endereço: {item.endereco}</Text>
                        <Text>Telefone: {item.telefone}</Text>
                        <Text>Data da consulta: {item.consulta}</Text>
                        <Text>Horario: {item.horario}</Text>
                        <Text>Valor: {item.valor}</Text>
                        <Text>{'\n'}</Text>
                    </View>
                  )
                  )}/>
              
                
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Editar</Text>
      </TouchableOpacity>

      <View style={styles.navegacao}>
      <Link href="/">Voltar para Home</Link>
      <StatusBar style="auto" />
    </View>
    </View>
    )
};
