import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos todas tus pantallas
import AltaUsuariosScreen from './screens/AltaUsuariosScreen';
import ConsultaUsuariosScreen from './screens/ConsultaUsuariosScreen';
import ActualizarUsuarioScreen from '../../repa2/ActualizarUsuarioScreen';
import DetallesUsuariosScreen from '../../repa2/DetallesUsuariosScreen'; // Asegúrate de que el nombre del archivo coincida exactamente

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Consulta">
        <Stack.Screen 
          name="Consulta" 
          component={ConsultaUsuariosScreen} 
          options={{ title: 'Consulta de Usuarios' }} 
        />
        <Stack.Screen 
          name="Alta" 
          component={AltaUsuariosScreen} 
          options={{ title: 'Alta de Usuarios' }} 
        />
        {/* AQUÍ ESTÁ LA RUTA 'Detalles' QUE TE ESTÁ PIDIENDO EL ERROR */}
        <Stack.Screen 
          name="Detalles" 
          component={DetallesUsuariosScreen} 
          options={{ title: 'Detalle del usuario' }} 
        />
        <Stack.Screen 
          name="Actualizar" 
          component={ActualizarUsuarioScreen} 
          options={{ title: 'Actualizar Usuario' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}