
/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Salu2} from './components/Salu2';
import { Perfil2 } from './components/Perfil';

/*zona2: main - hogar de los componetes */
export default function App() {
  return (
    <View style={styles.container}>
      
      <Perfil2
      nombre="Edith Uribe" 
      carrera="Sitemas" 
      materia="programacion movil" 
      cuatri="noveno"
      >
      </Perfil2>
      <Text>----------------------------------------------------------------</Text>
      <Text>----------------------------------------------------------------</Text>   

    </View>
  );
}

/*zona3: estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
