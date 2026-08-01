import React from 'react';
import { View, SafeAreaView, Text, Pressable, StyleSheet, Alert, Platform } from 'react-native';

export default function DetallesUsuariosScreen({ route, navigation }) {
  const { usuario } = route.params;

  const eliminarConfirmacion = () => {
    if (Platform.OS === 'web') {
      const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar al usuario ${usuario.nombre}?`);
      if (confirmacion) eliminarUsuarioBD();
    } else {
      Alert.alert(
        "Confirmar eliminación",
        `¿Estás seguro de que deseas eliminar al usuario ${usuario.nombre}?`,
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Sí, eliminar", onPress: () => eliminarUsuarioBD(), style: "destructive" }
        ]
      );
    }
  };

  const eliminarUsuarioBD = async () => {
    try {
      const respuesta = await fetch(`http://localhost:5000/v1/usuarios/${usuario.id}`, {
        method: 'DELETE',
      });
      if (respuesta.ok) {
        navigation.goBack(); // Regresa a la lista después de eliminar
      } else {
        Alert.alert("Error", "No se pudo eliminar el usuario.");
      }
    } catch (error) {
      console.log('Error al eliminar:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Detalles del Usuario</Text>
        
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.valor}>{usuario.nombre}</Text>
        
        <Text style={styles.label}>Edad</Text>
        <Text style={styles.valor}>{usuario.edad} años</Text>

        <Pressable 
          style={[styles.boton, styles.botonActualizar]} 
          onPress={() => navigation.navigate('Actualizar', { usuario })}
        >
          <Text style={styles.textoBotonActualizar}>Actualizar</Text>
        </Pressable>

        <Pressable 
          style={[styles.boton, styles.botonEliminar]} 
          onPress={eliminarConfirmacion}
        >
          <Text style={styles.textoBotonEliminar}>Eliminar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7FA', 
    padding: 20 
},

  card: { 
    backgroundColor: '#FFFFFF', 
    padding: 25, 
    borderRadius: 15, 
    elevation: 3 
},

  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 25 
},

  label: { 
    fontSize: 14, 
    color: '#6B7280', 
    marginTop: 15 
},

  valor: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#1F2937', 
    marginBottom: 10 
},

  boton: { 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 15 
},

  botonActualizar: { 
    backgroundColor: '#FBBF24' 
},

  botonEliminar: { 
    backgroundColor: '#DC2626', 
    marginTop: 10 
},

  textoBotonActualizar: { 
    color: '#000000', 
    fontSize: 16, 
    fontWeight: 'bold' 
},

  textoBotonEliminar: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
},

});