import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import CardDay from '../components/CardDay';

const Home = ({route}) => {
  const {nombre} = route.params;

  const date = new Date();
  const dateToday = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const [mensaje, setMensaje] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.txtHeader}>¿Qué tal tu día?</Text>
      <Text style={styles.txtDate}>
        {nombre}, hoy es {dateToday}
      </Text>
      <View style={styles.rowButtons}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor="transparent">
          <Image style={styles.img} source={require('../assets/bien.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor="transparent">
          <Image style={styles.img} source={require('../assets/normal.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor="transparent">
          <Image style={styles.img} source={require('../assets/mal.png')} />
        </TouchableHighlight>
      </View>
      <View style={styles.viewMessage}>
        <Text style={styles.txtLabel}>Escribe un breve resumen</Text>
        <TextInput
          style={styles.input}
          value={mensaje}
          onChangeText={setMensaje}
          placeholder="Mi día hoy ha ido..."
          placeholderTextColor="#FFFFFF"
          multiline={true}
          maxLength={500}
          textAlignVertical="top"
        />
        <TouchableHighlight style={styles.btnGuardar}>
          <Text style={styles.txtBtnGuardar}>📕 Guardar</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={{width: '100%', marginTop: 10}}>
        <CardDay />
        <CardDay />
        <CardDay />
        <CardDay />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F99F9F',
    paddingTop: 20,
  },
  txtHeader: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  txtDate: {
    fontSize: 20,
  },
  txtLabel: {
    fontSize: 20,
    textAlign: 'center',
  },
  rowButtons: {
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 10,
  },
  img: {
    width: 64,
    height: 64,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: '75%',
    height: 100,
    paddingHorizontal: 10,
    marginTop: 10,
    alignContent: 'flex-start',
  },
  viewMessage: {
    alignItems: 'center',
    width: '100%',
  },
  btnGuardar: {
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#FC0000',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnGuardar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Home;
