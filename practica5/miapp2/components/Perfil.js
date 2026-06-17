/*perfil usando desestructuracion */
import { Text, View, Button, StyleSheet} from "react-native";
import React,{useState} from "react";

   export const Perfil2= ({nombre,carrera,materia,cuatri, estiloE}) =>{
    
    const [mostrar, setmostrar] = useState(false);

    return(
        <View style={[estilos.targeta,estiloE]}>

        <Text style={estilos.nombre}>{nombre}</Text>

        {mostrar &&
        <>
        <Text style={estilos.carrera}>{carrera}</Text>
        <Text style={estilos.otrotexto}>{materia}</Text>
        <Text style={estilos.otrotexto}>{cuatri}</Text>
        </>
         }
        <Button 
        title="Mostrar perfil" 
        onPress={()=> setmostrar(!mostrar)}></Button>
        </View>
    )
}   



const estilos= StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:700,
        textTransform:"uppercase"
    },
    carrera:{
        fontSize:18,
        color:'purple',
        fontFamily:'Roboto'

    },
    otrotexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle:'italic'
    },
    targeta:{
        borderWidth:3,
        margin:20,
        padding:25,
    },
});


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