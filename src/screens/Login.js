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
          returnKeyType="go"
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
    backgroundColor: '#F99F9F',
    paddingTop: 40,
  },
  txtHeader: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: "#850000",
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
    flex: 1,
    maxHeight: 300,
    maxWidth: 300,
    alignSelf: 'center'
  },
  button: {
    marginBottom: 20,
    width: 200,
    backgroundColor: '#FF4D4D',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  txtInput: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#FFFFFF"  
  }
});

export default Login;
