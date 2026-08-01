import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';

export default function ActualizarUsuarioScreen({ route, navigation }) {
  const { usuario } = route.params;
  
  // Precargamos el estado con los datos actuales del usuario
  const [nombre, setNombre] = useState(usuario.nombre);
  const [edad, setEdad] = useState(usuario.edad.toString());
  const [carga, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuarioBD = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Vacíos', 'Por favor, complete todos los campos.');
      return;
    }

    try {
      setCargando(true);
      const respuesta = await fetch(`http://172.20.10.3:5000/v1/usuarios/${usuario.id}`, {
        method: 'PUT', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre, edad: Number(edad) }),
      });

      if (respuesta.ok) {
        mostrarMensaje('Éxito', 'Usuario actualizado correctamente.');
        navigation.navigate('Consulta'); // Volvemos a la lista
      } else {
        mostrarMensaje('Error', 'No se pudo actualizar el usuario.');
      }
    } catch (error) {
      console.log('Error al actualizar:', error);
      mostrarMensaje('Error', 'Ocurrió un error al conectar.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Actualizar Usuario</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable style={styles.boton} onPress={actualizarUsuarioBD} disabled={carga}>
          <Text style={styles.textoBoton}>
            {carga ? "Guardando..." : "Guardar cambios"}
          </Text>
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
    marginBottom: 20 
},

  label: { 
    fontSize: 14, 
    color: '#6B7280', 
    marginBottom: 5 
},

  input: { 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#D1D5DB', 
    borderRadius: 8, 
    paddingHorizontal: 15, 
    marginBottom: 20, 
    backgroundColor: '#F9FAFB', 
    fontSize: 16 
},

  boton: { 
    backgroundColor: '#FBBF24', 
    paddingVertical: 15, 
    borderRadius: 8, 
    alignItems: 'center' 
},

  textoBoton: { 
    color: '#000000', 
    fontSize: 16, 
    fontWeight: 'bold' 
},

});