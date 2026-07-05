/* zona 1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, ImageBackground, FlatList, Pressable, Alert, Image } from 'react-native';
import { useState, useEffect } from 'react';

/* zona 2: main - hogar de los componentes */
export default function Practica17() {
  
  
  const [loading, setLoading] = useState(true);
  
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [libros, setLibros] = useState([]);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  
  const handleGuardar = () => {
    // Validar que no estén vacíos
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alerta', 'Por favor, llena todos los campos.');
      return;
    }

    
    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false);
      

      const nuevoLibro = {
        id: Math.random().toString(), // Generar un ID sencillo
        nombre: titulo,
        autor: autor,
        genero: genero
      };
      setLibros([...libros, nuevoLibro]);

      
      Alert.alert('Alerta', 'Libro guardado con éxito');
      
      
      setTitulo('');
      setAutor('');
      setGenero('');
    }, 4000); 
  };

  
  if (loading) {
    return (
      <View style={styles.splash}>
        <Image 
          source={{ uri: 'https://thumbs.dreamstime.com/b/libro-del-logo-de-la-biblioteca-e-ilustraci%C3%B3n-dise%C3%B1o-vector-dom%C3%A9stico-o-escolar-sobre-fondo-blanco-157924539.jpg'}}
          style={styles.imagenSplash}
        />
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        <Text style={styles.splashText}>Cargando aplicación...</Text>
      </View>
    );
  }

  
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Catálogo de Libros</Text>

        
        <TextInput 
          style={styles.input} 
          placeholder="Título" 
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Autor" 
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Género" 
          value={genero}
          onChangeText={setGenero}
        />

        
        <View style={styles.actionArea}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#4D96FF" />
          ) : (
            <Pressable style={styles.boton} onPress={handleGuardar}>
              <Text style={styles.textoBoton}>Agregar Libro</Text>
            </Pressable>
          )}
        </View>

        
        <Text style={styles.textoContador}>Total de libros: {libros.length}</Text>

        
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemFlat}>
              <Text style={styles.textoItem}>Título: {item.nombre}</Text>
              <Text style={styles.textoItem}>Autor: {item.autor}</Text>
              <Text style={styles.textoItem}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

/* zona 3: estilos y posicionamiento */
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagenSplash: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 30, 
  },
  loader: {
    marginBottom: 10, 
  },
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  actionArea: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textoContador: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemFlat: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
  }
});