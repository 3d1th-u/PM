
/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Salu2} from './components/Salu2';
import { Perfil1 } from './components/Perfil';


/*zona2: main - hogar de los componetes */
export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/wave.png')}/>

      <Text>Holaaaa mundo RN :p</Text>

      <Text>=================================componente simple=========================================</Text>
      <Saludo></Saludo>
      <Text>=================================componente compuesto=========================================</Text>
      <Salu2></Salu2>
      <Text>=================================Perfil=========================================</Text>
      <Perfil1></Perfil1>

      <StatusBar style="auto" />

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
