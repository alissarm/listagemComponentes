import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';


export default function App() {

    const [nome] = useState('Alissa')
    const [dataNascimento] = useState('12/34/5678');
    const [CPF] = useState('123.456.789-01');
    const [endereco] = useState('Rua 123');
    const [dataConsulta] =  useState('06/10/2023');
    const [horario] = useState ('08:30');
    const [preco] = useState('valor da consulta: R$200,00');

    useEffect(() => {
        console.log({nome}, 
            {dataNascimento}, {CPF}, {endereco}, {dataConsulta}, {horario}, {preco})
      })

return(
        <View style={styles.container}>
            <Text style={styles.title}>Dados do paciente</Text>

            <Text style={styles.dados}> {nome}  </Text>
            <Text style={styles.dados}> {dataNascimento}  </Text>
            <Text style={styles.dados}> {CPF}  </Text>
            <Text style={styles.dados}> {endereco}  </Text>
            <Text style={styles.dados}> {dataConsulta}  </Text>
            <Text style={styles.dados}> {horario}  </Text>
            <Text style={styles.dados}> {preco}  </Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Editar</Text>
      </TouchableOpacity>

      <View style={styles.container}>
      <Link href="/">Voltar para Home</Link>
      <StatusBar style="auto" />
    </View>
    </View>
    )
}
;