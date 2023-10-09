import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 60,
    },
    title:{
      color: '#567a49',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 25,
    },
    input:{
      color: '#000000',
      backgroundColor: '#fff',
      borderRadius: 5,
      fontWeight: '200',
      width: '70%',
      margin: 10,
      padding: 10,
    },
    btn:{
      backgroundColor: '#567a49',
      fontSize: 14,
      width: '70%',
      margin: 10,
      padding: 10,
      marginBottom: 30,
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    btnTxt:{
      color: '#fff',
      fontFamily: 'Arial',
      fontWeight: '600',
    },
    dados:{
        textAlign: 'justify',
    },
    navegacao:{
      marginBottom: 50,
      alignItems: 'center',
    }
  });
