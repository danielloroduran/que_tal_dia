import React, {useState} from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';

const RadioButton = ({data, onSelect}) => {

  const [opcionSelec, setOpcionSelec] = useState(null)

  const selectHandler = (item) => {
    onSelect(item)
    setOpcionSelec(item)
    console.log(item)
  }

  return (
    <View style={styles.rowButtons}>
      {data.map((item) => {
        return (
          <Pressable
            key={item.nombre}
            onPress={() => selectHandler(item)}
            >
            <Image
              style={styles.img}
              source={item.value}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rowButtons: {
    paddingVertical: 20,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  img: {
    width: 64,
    height: 64,
  },
});

export default RadioButton;
