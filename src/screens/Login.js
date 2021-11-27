import React, {useState} from 'react';

import {View, Text, TextInput, Image, Pressable, StyleSheet, Alert, ScrollView} from 'react-native';

const Login = ({navigation}) => {
  const [nombre, setNombre] = useState('');

  const handleLogin = () => {
    if(nombre){
      navigation.replace('Home', {nombre: nombre})
    }else{
      Alert.alert("Error", "Es necesario que introduzcas un nombre")
    }
  }

  return (
    <ScrollView style={styles.body} alignItems="center">
      <Text style={styles.txtHeader}>Bienvenido, bienvenida</Text>
      <Image style={styles.image} source={require("../assets/login.png")}/>
      <View style={{paddingVertical: 40}}>
        <Text style={styles.txtLabel}>Introduce tu nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre"
          placeholderTextColor="#FFFFFF"
          autoComplete= "name"
        />
      </View>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.txtInput}>
          Adelante
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#F99F9F',
    paddingTop: 40,
  },
  txtHeader: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  txtLabel: {
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: 200,
    paddingHorizontal: 10,
    marginTop: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250,
  },
  button: {
    width: 200,
    backgroundColor: '#FF4D4D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
    alignSelf: 'center'
  },
  txtInput: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#FFFFFF"  
  }
});

export default Login;
