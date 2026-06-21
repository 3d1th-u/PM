/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import { Perfil2 } from '../components/Perfil';


/*zona2: main - hogar de los componetes */
export default function SafeAreaScreen() {
  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>
        <Text>Aquí va la practica de Ivet o Gaby gaby</Text>

        <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>

        <ScrollView horizontal={true}>

          <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
          <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
          <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
          <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
          <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
          <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>


        </ScrollView>
        
        <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaRoja} nombre="Edith Uribe" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>
        <Perfil2 estiloE={styles.targetaVerde} nombre="Axel GR" carrera="Sitemas" materia="programacion movil" cuatri="noveno"></Perfil2>

      <StatusBar style='auto'/>

      </ScrollView>  

    </SafeAreaView>
  );
}

/*zona3: estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width:450,
    margin: 50,
  },
  targetaRoja:{backgroundColor:'#FF6B6B'},
  targetaVerde:{backgroundColor:'#6BCB77'},
  
});



// /*zona1: importaciones de componentes y archivos */
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView, SafeAreaView, Switch, SafeAreaViewBase} from 'react-native';
// import React, { useState } from 'react';


// /*zona2: main - hogar de los componetes */
// export default function SafeAreaScreen() {

//   const {activo, setActivo} = useState(true);
//   const Contenedor = activo ? SafeAreaView: View;

//   return (

//     <Contenedor style = {styles.fondo}>

//     <Text style ={styles.titulo}> SafeAreaView, ScrollView</Text>

//     <Text style ={styles.descripcion}> SafeAreaView, ScrollView</Text>

//     <View style= {styles.fila}>
//       <Text style={styles.etiqueta}> Activar SafeAreaView</Text>

//       <Switch/>
//     </View>

//     <Text style ={styles.descripcion}> ScrollView ScrollView </Text>

//     <ScrollView style = {styles.lista}>
//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 1</Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 2</Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 3</Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 4</Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 5</Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 6 </Text>
//       </View>

//       <View style={[styles.tarjeta,{backgroundColor: 'Red'}]}>
//         <Text style = {styles.textoTarjeta}>elemento 7</Text>
//       </View>
//     </ScrollView>


//     </Contenedor>

//   );
// }

// /*zona3: estilos y posicionamiento */
// const styles = StyleSheet.create({
//   fondo: {
//     flex: 1,
//     backgroundColor: '#1a1a2e',
//     padding: 20,
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   descripcion: {
//     fontSize: 13,
//     color: '#aaaaaa',
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   fila: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,255,255,0.08)',
//     borderRadius: 12,
//     padding: 12,
//     marginBottom: 16,
//   },
//   etiqueta: {
//     color: '#ffffff',
//     fontSize: 14,
//   },
//   lista: {
//     flex: 1,
//   },
//   tarjeta: {
//     height: 80,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   textoTarjeta: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


