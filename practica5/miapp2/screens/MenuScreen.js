
/*zona1: importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableSwitchScreen from './PressableSwitchScreen';


/*zona2: main - hogar de los componetes */
export default function MenuScreen() {

    const [screen, setScreen]=useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'safeArea':
            return <SafeAreaScreen/>
        case 'pressable':
            return <PressableSwitchScreen/>
        case 'textinput':
            return <TextInputScreen/>
        case 'flatlist':
            return <FlatListScreen/>
        case 'imagebackgroung':
            return <ImageBackgroungScreen/>
        case 'activityindicator':
            return <ActivityIndicatorScreen/>
        case 'modal':
            return <ModalBottomSheetScreen/>
        
        case 'menu':
            default:
            return (
                <View style={styles.container}>

                    <Text>Menu de Practicas </Text>
                    <Button onPress={()=> setScreen('tarjetas')} title='Tarjetas'/>

                    <Button onPress={()=> setScreen('safeArea')} title='SafeAreaView, ScrollView'/>
                    
                    <Button onPress={()=> setScreen('pressable')} title='Pressable & Switch'/>
                    
                    <Button onPress={()=> setScreen('textinput')} title='TextInput & Alert'/>
                    
                    <Button onPress={()=> setScreen('flatlist')} title='FlatList & Section List'/>
                    
                    <Button onPress={()=> setScreen('imagebackgroung')} title='ImageBackgroung & SlapshScreen'/>
                    
                    <Button onPress={()=> setScreen('activityindicator')} title='ActivityIndicator, KeyboardAvoidingView'/>

                    <Button onPress={()=> setScreen('modal')} title='Modal & BottomSheet'/>

                    <StatusBar style='auto'/>

                </View>
            );
        }

}

/*zona3: estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff6c',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    width: 420, 
    margin: 100,
    borderRadius: 10,
    gap:16,
  },
  

});

