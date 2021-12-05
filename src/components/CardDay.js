import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {Transition, Transitioning} from 'react-native-reanimated';

const CardDay = (props) => {
  const {estado, fecha, mensaje} = props.item

  const [expanded, isExpanded] = useState(false);
  const ref = useRef();

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
          isExpanded(!expanded);
        }}>
        <View style={styles.card}>
          <View>
            <Image style={styles.img} source={estado.value} />
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
    width: '75%',
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
  img: {
    width: 50,
    height: 50,
  },
  txtHeader: {
    color: '#000000',
    fontSize: 20,
  },
  txtResumen: {
    textAlign: 'justify',
    color: '#000000',
  },
});

export default CardDay;
