import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet , View, TextInput, Button, TouchableOpacity } from 'react-native';


export default function App() {

  function calculoCombustivel (){
  const resultado = km / combustivel;
  alert("O consumo de combustível de seu carro é " + resultado);}

  const [km, setKm] = useState('');
  const [combustivel, setCombustivel] = useState(''); 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Consumo de Combustível - Posto Ipiranga
      </Text>
    
    <TextInput style={styles.input}
    placeholder="Insira os km percorridos" placeholderTextColor="red"
    keyboardType="numeric"
    onChangeText={(km)=>setKm(km)}
    />


    <TextInput style={styles.input}
    placeholder="Digite a quantidade de combustível" placeholderTextColor="red"
    keyboardType="numeric"
    onChangeText={(combustivel)=>setCombustivel(combustivel)}
    />


    <TouchableOpacity style={styles.btn} onPress={calculoCombustivel}>
<Text style={styles.textBtn}> Calcular o consumo</Text>
</TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60
  },
  input:{
    fontSize: 20,
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 10,
    margin: 15,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    marginTop: 50

  },
  textBtn:{
    fontSize:30,
    color: 'white'
  }
});