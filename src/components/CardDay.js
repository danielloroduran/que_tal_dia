import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import {Transition, Transitioning} from 'react-native-reanimated';

const CardDay = () => {
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
            <Image style={styles.img} source={require('../assets/mal.png')} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.txtHeader}>23/05/2000</Text>
            <Text style={styles.txtResumen} numberOfLines={expanded ? 30 : 3}>
              Dicunt percipit deserunt ut usu. Aliquip delenit an eam, vocent
              vituperata vim ea. Ei mollis audire interpretaris cum, ei impedit
              fierent sea. Ius at homero noster prompta, ea sit dignissim
              vituperata efficiendi. Natum placerat ad mei. Senserit mediocrem
              vis ex, et dicunt deleniti gubergren mei. Mel id clita mollis
              repudiare. Sed ad nostro delicatissimi, postea pertinax est an.
              Adhuc sensibus percipitur sed te, eirmod tritani debitis nec ea.
              Cu vis quis gubergren. Virtute equidem ceteros in me
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
  },
});

export default CardDay;
