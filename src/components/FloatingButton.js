import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()} activeOpacity={0.8}>
      <Icon name="trash" type="font-awesome-5" size={15} color="#FFFFFF"/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 10,
    right: 10,
    borderRadius: 30,
    backgroundColor: "#FF0458",
    justifyContent: "center",
    alignItems:"center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
})

export default FloatingButton