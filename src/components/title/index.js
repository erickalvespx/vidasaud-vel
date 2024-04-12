//importação de componentes
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

//exportação de componentes
export default function Title(){
    //visualização do titulo Vida Saudável!
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}