import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import { Icon } from 'react-native-elements';

const CardDay = (props) => {
  const {fecha, estado, mensaje} = props.item
  const [expanded, setIsExpanded] = useState(false);
  const ref = useRef();
  const [estadoImagen, setEstadoImagen]  = useState(() => {
    switch(estado){
      case "bien":
        return "smile"
      case "normal":
        return "meh"
      case "mal":
        return "frown"
      default:
        return ''
    }
  })
  

  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={200} />
      <Transition.Change />
      <Transition.Out type="fade" durationMs={200} />
    </Transition.Together>
  );

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          ref.current.animateNextTransition();
          setIsExpanded(!expanded);
        }}>
        <View style={styles.card}>
          <View>
            <Icon name={estadoImagen} type="font-awesome-5" color="#F7EE3E" size={50}/>
          </View>
          <View style={styles.textView}>
            <Text style={styles.txtHeader}>{fecha}</Text>
            <Text style={styles.txtResumen} numberOfLines={expanded ? 30 : 3}>
              {mensaje}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    flexShrink: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    width: '78%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  imageView: {
    flex: 1,
  },
  textView: {
    flex: 2,
    paddingHorizontal: 10,
  },
  txtHeader: {
    color: '#000000',
    fontSize: 20,
    fontFamily: "Poppins-SemiBold"
  },
  txtResumen: {
    textAlign: 'justify',
    color: '#000000',
    fontFamily: "Poppins-Regular"
  },
});

export default CardDay;
