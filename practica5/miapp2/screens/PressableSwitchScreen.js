/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState } from "react";

/*zona2: main - hogar de los componentes */
export default function PressableSwitchScreen() {

    const [buttonText, setButtonText] = useState("Dame clic");
    const [isDarkMode, setIsDarkMode] = useState(false); 

    return (
        <View 
            style={[styles.container, {backgroundColor: isDarkMode ? "#000000" : "#ffffff"}]}
        >
            <StatusBar style={isDarkMode ? "light" : "dark"} />

            <Pressable
                style={styles.button} 
                onPress={() => {
                    console.log("Se presiono el boton");
                    setButtonText("boton presionado");
                }}
                onPressIn={() => {
                    console.log("se acaba de presionar el boton;");
                }}
                onPressOut={() => {
                    console.log("se dejo de presionar el boton;");
                }}
                onLongPress={() => {
                    console.log("presion prolongada");
                    setButtonText("presion prolongada detectada");
                }}
            >
                {/* Corrección: StyleSheet.buttonText -> styles.buttonText */}
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>

            <View style={styles.switchContainer}>
                <Text style={[styles.text, {color: isDarkMode ? "#ffffff" : "#000000"}]}>
                    DARK MODE
                </Text>

                <Switch
                    value={isDarkMode}
                    // Corrección: Sintaxis correcta para actualizar el estado
                    onValueChange={() => setIsDarkMode(previousState => !previousState)}
                    trackColor={{false: "#767577", true: "lightblue"}}
                    thumbColor={"#f5f3f4"}
                />
            </View>

        </View>
    );
}

/*zona3: estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 10,
        marginBottom: 50 
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%", 
        paddingHorizontal: 10,
        marginTop: 20
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
});