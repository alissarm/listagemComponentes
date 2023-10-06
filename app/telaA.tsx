import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';

export default function App() {

      //UseState
      const [nome, setNome] = useState('');
      const [data, setData] = useState('');
      const [CPF, setCPF] = useState('');
      const [endereco, setEndereco] = useState('');
      const [dataConsulta, setDataConsulta] = useState('');
      const [horario, setHorario] = useState('');
      const [preco] = useState('valor da consulta: R$200,00');
  
      useEffect(() => {
          console.log('valor da consulta: R$200,00')
        })
  
      function handleUserAdd(){
          console.log(
              "Nome completo: " + nome
  
              +"\nData de nascimento: " + data
  
              +"\nCPF: " + CPF
  
              +"\nEndereço: " + endereco
  
              +"\nData da consulta:  " + dataConsulta
  
              +"\nHorario da consulta:  " + horario
          )
  
          Alert.alert(
              "Nome completo: " + nome
  
          )
      }
  
  
  return(
          <View style={styles.container}>
              <Text style={styles.title}>Seja bem-vindo!</Text>
              <TextInput
              style={styles.input}
              placeholder='Nome completo'
  
              value={ nome }
              onChangeText={ setNome }
              />
              
              <TextInput
                  style={styles.input}
                  placeholder="Data de nascimento"
  
                  value={ data }
                  onChangeText={setData}
              />
  
              <TextInput
                  style={styles.input}
                  onChangeText={setCPF}
                  placeholder="CPF"
                  value={ CPF }
              />
  
              <TextInput
                  style={styles.input}
                  placeholder="Endereço"
  
                  value={ endereco }
                  onChangeText={ setEndereco }
              />
  
  
              <TextInput
              style={styles.input}
              placeholder='Data da consulta'
  
              value={ dataConsulta }
              onChangeText={ setDataConsulta }
              />
  
              <TextInput
              style={styles.input}
              placeholder='Horario da consulta'
  
              value={ horario }
              onChangeText={ setHorario }
              />
              {preco}
  
        <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
          <Text style={styles.btnTxt}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.container}>
      <Link href="/telaB">Próxima tela (dados)</Link>
      <Link href="/">Voltar para Home</Link>
      <StatusBar style="auto" />
    </View>

      </View>
      )
  }
  

;