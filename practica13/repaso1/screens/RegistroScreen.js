import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, TextInput, Platform, Alert, Keyboard, Button, SafeAreaView, ScrollView} from 'react-native';
import { useState } from "react";

export default function RegistroScreen() {

    const [Nombre, setNombre] = useState('');
    const [Carrera, setCarrera] = useState('');
    const [Cuatri, setCuatri] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    const prosesarRegistro = () => {
        if (Platform.OS !== 'web') Keyboard.dismiss();
        
        // validar campos vacíos
        if (!Nombre || !Carrera || !Cuatri){
            alertasManager("Campos incompletos", "Debes llenar todos los campos.");
            return;
        }

        // validar que el semestre sea numero
        if (isNaN(Cuatri)) {
            alertasManager("Error", "El semestre debe ser un número.");
            return;
        }

        // mensaje con los datos y los switches
        const mensajeExito = `Nombre: ${Nombre}\nCarrera: ${Carrera}\nSemestre: ${Cuatri}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`;

        alertasManager("Registro enviado", mensajeExito);
    };

    const alertasManager = (titulo, mensaje) => {
        if (Platform.OS === 'web'){
            alert(`${titulo}\n\n${mensaje}`);
        } else {
            Alert.alert(titulo, mensaje);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

            <Text style={{fontSize: 18, marginBottom: 20}}>
                Registro de Evento Universitario
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre completo:"
                value={Nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Carrera:"
                value={Carrera}
                onChangeText={setCarrera}
            />

            <TextInput
                style={styles.input}
                placeholder="Cuatrimestre"
                value={Cuatri}
                onChangeText={setCuatri}
                keyboardType="numeric"
                maxLength={2}
            />

            <Text style={{fontWeight: 'bold', marginTop: 10, marginBottom: 10}}>Opciones</Text>

            <View style={styles.switchContainer}>
                <Text>¿Asistirá al taller?</Text>
                <Switch 
                    value={taller} 
                    onValueChange={setTaller} 
                    trackColor={{false: "#767577", true: "#2c60ba"}}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>¿Requiere constancia?</Text>
                <Switch 
                    value={constancia} 
                    onValueChange={setConstancia} 
                    trackColor={{false: "#767577", true: "#2c60ba"}}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>¿Participará en deportes?</Text>
                <Switch 
                    value={deportes} 
                    onValueChange={setDeportes} 
                    trackColor={{false: "#767577", true: "#2c60ba"}}
                />
            </View>

            <View style={{marginTop: 10}}>
                <Button 
                    title="Enviar Registro"
                    onPress={prosesarRegistro}
                    color="#25893c"
                />
            </View>

        </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#1f98d475',
    width: 350,
    marginTop: 100,
    marginBottom: 100,
    margin: 40,
    borderRadius: 10,
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#dcdde1',
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 12, 
    backgroundColor: '#fff' 
  },
  switchContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15
  },
});