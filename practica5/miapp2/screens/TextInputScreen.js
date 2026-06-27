/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Platform, Alert, Keyboard, Button  } from 'react-native';
import { useState } from "react";

/*zona2: main - hogar de los componentes */
export default function TextInputScreen() {

    const [Nombre, setNombre] = useState('');
    const [Password, setPassword] = useState('');
    const [Edad, setEdad] = useState('');
    const [Correo, setCorreo] = useState('');

    const prosesarRegistro = () => {

        if (Platform.OS !== 'web') Keyboard.dismiss();
        if (!Nombre || !Password || !Edad || !Correo){

            alertasManager("Validacion", "Todos los campos son obligatorios");
            return;
        }
        alertasManager("Exito", 'Registro procesado para: ${Nombre}');

    };

    const alertasManager = (titulo, mensaje) => {
        if (Platform.OS == 'web'){
            alert('${titulo}: ${mensaje}');

        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    return (
        <View style={styles.container}>

            {}
            <TextInput
                style={styles.input}
                placeholder="nombre completo"
                value={Nombre}
                onChangeText={setNombre}
            />

            {}
            <TextInput
                style={styles.input}
                placeholder="contraseña"
                value={Password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {}
            <TextInput
                style={styles.input}
                placeholder="edad"
                value={Edad}
                onChangeText={setEdad}
                keyboardType="numeric"
                maxLength={3}
            />

            <TextInput
                style={styles.input}
                placeholder="correo"
                value={Correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            {}
            <Button 
                title="registrar usuario"
                onPress={prosesarRegistro}
            />



        </View>
    );

    
}

/*zona3: estilos y posicionamiento */
const styles = StyleSheet.create({
  container: { 
    flex: 1, justifyContent:
    'center', padding: 20, 
    backgroundColor: '#f5f6fa' },
  input: { 
    borderWidth: 1, 
    borderColor: '#dcdde1',
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' }
});