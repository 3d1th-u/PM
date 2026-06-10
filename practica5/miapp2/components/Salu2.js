import { Button, Text, Image, View} from "react-native";

export const Salu2= () =>{
    return(
        <View>
        <Text>Soy un componente propiooo</Text>
        <Image source={require('../assets/wave.png')}/>
        <Button title="Holaaa"></Button>
        </View>
    )
}