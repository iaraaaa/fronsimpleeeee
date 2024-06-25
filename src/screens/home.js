import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getValueFor } from "../utils/storage";
import { materiasapi } from "../apis/getmaterias";
import { Cards } from "../components/cards";

export default Home = () => {
  const [token, setToken] = useState(null); // Inicializa el token como null
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const getTokenAndMaterias = async () => {
      try {
        const token = await getValueFor("token");
        setToken(token); // Actualiza el estado con el token obtenido
        if (token) {
          const data = await materiasapi(token);
          setMaterias(data); // Actualiza el estado de materias con los datos obtenidos
        }
      } catch (error) {
        console.error("Error al obtener token o materias:", error);
      }
    };

    getTokenAndMaterias(); // Llama a la función para obtener el token y las materias al cargar el componente
  }, []);

  return (
    <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
      <Text>Lista de materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Cards nombre={item.nombre} />}
        keyExtractor={(item) => item.id.toString()} // Asegúrate de convertir el ID a string si es necesario
      />
    </View>
  );
};
