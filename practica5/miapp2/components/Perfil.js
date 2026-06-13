/*perfil usando desestructuracion */
import { Text, View, Button} from "react-native";
import React,{useState} from "react";

   export const Perfil2= ({nombre,carrera,materia,cuatri}) =>{
    
    const [mostrar, setmostrar] = useState(false);

    return(
        <View>

        <Text>{nombre}</Text>

        {mostrar &&
        <>
        <Text>{carrera}</Text>
        <Text>{materia}</Text>
        <Text>{cuatri}</Text>
        </>
         }
        <Button 
        title="Mostrar perfil" 
        onPress={()=> setmostrar(!mostrar)}></Button>
        </View>
    )
}   


/* */
/*    export const Perfil2= (props) =>{
    return(
        <View>

        <Text>{props.nombre}</Text>
        <Text>{props.carrera}</Text>
        <Text>{props.materia}</Text>
        <Text>{props.cuatri}</Text>
        </View>
    ) */