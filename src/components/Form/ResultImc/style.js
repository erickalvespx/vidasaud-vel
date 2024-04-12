//importação da função
import { StyleSheet } from "react-native";
import ResultImc from ".";

const styles = StyleSheet.create({
    //local em que o imc irá aparecer
    resultImc: {
        flex: 1,
        marginTop: 15,
        marginTop: 60, 
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    //visualização da informação do seu imc!
    information: {
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
    },
    //Visualização do valor do seu imc!
    numberImc:{
        fontSize: 48,
        color: "#000000",
        fontWeight: "bold",
    }
});

//exportação da variável styles
export default styles