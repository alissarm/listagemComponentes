import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

      //UseState
      const [nome, setNome] = useState('');
      const [data, setData] = useState('');
      const [CPF, setCPF] = useState('');
      const [endereco, setEndereco] = useState('');
      const [dataConsulta, setDataConsulta] = useState('');
      const [telefone, setTelefone] = useState('');
      const [horario, setHorario] = useState('');
      const [preco] = useState('valor da consulta: R$200,00');
  
      function handleUserAdd(){
          console.log(
              " Cadastro concluído com sucesso" + nome
  
              +"\nData de nascimento: " + data
  
              +"\nCPF: " + CPF
  
              +"\nEndereço: " + endereco
  
              +"\nData da consulta:  " + dataConsulta
  
              +"\nHorario da consulta:  " + horario 
          )
  
          Alert.alert(
              "Nome completo: " + nome

              +"\nData de nascimento: " + data
  
              +"\nCPF: " + CPF
  
              +"\nEndereço: " + endereco
  
              +"\nData da consulta:  " + dataConsulta
  
              +"\nHorario da consulta:  " + horario 
              + "\n" + preco
  
          )
      }
  
  
  return(
          <View style={styles.container}>
              <Text style={styles.title}>Cadastro</Text>
              <TextInput
              style={styles.input}
              placeholder='Nome completo'
              placeholderTextColor={'#000000'}
              value={ nome }
              onChangeText={ setNome }
              />
              
              <TextInput
                  style={styles.input}
                  placeholder="Data de nascimento"
                  placeholderTextColor={'#000000'}
                  value={ data }
                  onChangeText={setData}
              />
  
              <TextInput
                  style={styles.input}
                  onChangeText={setCPF}
                  placeholder="CPF"
                  placeholderTextColor={'#000000'}
                  value={ CPF }
              />
  
              <TextInput
                  style={styles.input}
                  placeholder="Endereço"
                  placeholderTextColor={'#000000'}
                  value={ endereco }
                  onChangeText={ setEndereco }
              />

              <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                  placeholderTextColor={'#000000'}
                  value={ telefone }
                  onChangeText={ setTelefone }
              />
  
  
              <TextInput
              style={styles.input}
              placeholder='Data da consulta'
              placeholderTextColor={'#000000'}
              value={ dataConsulta }
              onChangeText={ setDataConsulta }
              />
  
              <TextInput
              style={styles.input}
              placeholder='Horario da consulta'
              placeholderTextColor={'#000000'}
              value={ horario }
              onChangeText={ setHorario }
              />
              <Text> {preco} </Text>
  
        <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
          <Text style={styles.btnTxt}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.navegacao}>
      <Link href="/telaB">Próxima tela (dados)</Link>
      <Link href="/">Voltar para Home</Link>
      <StatusBar style="auto" />
    </View>

      </View>
      
      )
  }
  

;
