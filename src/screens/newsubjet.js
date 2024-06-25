import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { Text } from "react-native-paper";

const NewSubjet = () => {
  const [subjectName, setSubjectName] = useState("");

  const handleSaveSubject = () => {
    if (subjectName.trim().length === 0) {
      Alert.alert("Error", "Por favor ingresa el nombre de la materia.");
      return;
    }
    // Aquí deberías implementar la lógica para guardar la materia en la base de datos
    Alert.alert("Éxito", `Materia guardada: ${subjectName}`);
    setSubjectName(""); // Limpiar el campo después de guardar
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nueva materia</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Nombre de la materia"
        value={subjectName}
        onChangeText={(text) => setSubjectName(text)}
      />
      <Button title="Guardar materia" onPress={handleSaveSubject} />
    </View>
  );
};

export default NewSubjet;
