import React, {useState, useEffect, useCallback} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CardDay from '../components/CardDay';
import FloatingButton from '../components/FloatingButton';
import RadioButton from '../components/RadioButton';
import {estadosSeleccionables} from '../data/Estados';
import {
  createTable,
  getDBConnection,
  getDiaItems,
  saveDiaItems,
} from '../utilities/db-service';
import LoadingIndicator from '../components/LoadingIndicator';

const Home = ({route}) => {
  const {nombre} = route.params;

  const date = new Date();
  const dateToday = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const [datos, setDatos] = useState([]);
  const [mensajeHoy, setMensajeHoy] = useState('');
  const [estado, setEstado] = useState(null);
  const [mostrarHeader, setMostrarHeader] = useState(true);

  const loadDataCallBack = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);
      const storedDiaItems = await getDiaItems(db);
      if (storedDiaItems.length) {
        setDatos(storedDiaItems);
        comprobarDatos(storedDiaItems);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const comprobarDatos = data => {
    data.map(item => {
      if (item.fecha === dateToday) {
        setMostrarHeader(false);
        return;
      }
    });
  };

  useEffect(() => {
    loadDataCallBack();
  }, [loadDataCallBack]);

  const addDayItem = async () => {
    try {
      if(estado.length > 0){
        const newDayItems = [
          ...datos,
          {
            id: datos.length
              ? datos.reduce((acc, cur) => {
                  if (cur.id > acc.id) return cur;
                  return acc;
                }).id + 1
              : 0,
            fecha: dateToday,
            estado: estado.nombre,
            mensaje: mensajeHoy,
          },
        ];
        setDatos(newDayItems);
        const db = await getDBConnection();
        await saveDiaItems(db, newDayItems);
  
        setMensajeHoy('');
        setEstado(null);
        setMostrarHeader(false);
      }else{
        Alert.alert("Error", "Aunque el resumen puede estar en blanco, debes seleccionar una emoción para el día")
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const IntroducirDatos = () => {
    return (
      <>
        <RadioButton
          data={estadosSeleccionables}
          onSelect={(value) => setEstado(value)}
        />
        <View style={styles.viewMessage}>
          {estado && (
            <Text style={styles.txtLabel}>Hoy me siento {estado.nombre}</Text>
          )}
          <Text style={styles.txtLabel}>Escribe un breve resumen</Text>
          <TextInput
            style={styles.input}
            value={mensajeHoy}
            onChangeText={setMensajeHoy}
            placeholder="Mi día hoy ha ido..."
            placeholderTextColor="#FFFFFF"
            multiline={true}
            maxLength={500}
            textAlignVertical="top"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnGuardar}
            onPress={() => addDayItem()}>
            <Text style={styles.txtBtnGuardar}>📕 Guardar</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const DatosIntroducidos = () => {
    return (
      <>
        <Text style={styles.txtDatosIntroducidos}>
          Vuelve mañana para escribir un resumen de tu día
        </Text>
      </>
    );
  };

  return (
    <View style={styles.body}>
      <Text style={styles.txtHeader}>¿Qué tal tu día?</Text>
      <Text style={styles.txtLabel}>
        {nombre}, hoy es {dateToday}
      </Text>
      {mostrarHeader ? <IntroducirDatos /> : <DatosIntroducidos />}
      <ScrollView style={{width: '100%', marginTop: 10}}>
        {datos.map(item => {
          return <CardDay key={item.fecha} item={item} />;
        })}
      </ScrollView>
      <FloatingButton />
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
    color: '#850000',
  },
  txtLabel: {
    fontSize: 20,
    textAlign: 'center',
    color: '#960000',
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
    backgroundColor: '#FF4D4D',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  txtBtnGuardar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  txtDatosIntroducidos: {
    fontSize: 20,
    textAlign: 'center',
    color: '#960000',
    borderRadius: 10,
    backgroundColor: '#FFD6D6',
    marginTop: 20,
    width: '75%',
  },
});

export default Home;
