import React from "react";
import { Text, View } from "react-native";

export const Cards = ({ nombre }) => {
  return (
    <View style={styles}>
      <Text style={styles.text}>{nombre}</Text>
    </View>
  );
};

const styles = {
    backgroundColor: "red",
    margin: 2,
    height: 300, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
  },
};




