import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../desing/colors";

export default function Card({concluido = false,
                                 texto = '',
                                 fnConcluir = () => false,
                                 fnExcluir = () => false
                            }) {

    let styles = stylesAtivo

    if (concluido) {
        styles = stylesConcluido
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnCheck} onPress={fnConcluir}>
                {concluido && <Image source={require("../assets/check.png")}/>}
            </TouchableOpacity>

            <Text style={styles.texto}>{texto}</Text>

            <TouchableOpacity onPress={fnExcluir}>
                <Image style={styles.lixo} source={require('../assets/lixo.png')} />
            </TouchableOpacity>
        </View>
    )
}

const stylesConcluido = StyleSheet.create ({
        container: {
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.gray_200,
            padding: 10,
            marginHorizontal: 20,
            marginVertical: 10,
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
        },

        btnCheck: {
            width: 25,
            height: 25,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: colors.green_base,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.green_base,
        },

        lixo: {
            width: 30,
            resizeMode: "contain",
        },

        icon: {
            width: 30,
            height: 30,
            resizeMode: "contain",
    },

        texto: {
            color: colors.gray_600,
            fontSize: 18,
            width: '77%',
            textDecorationLine: 'line-through',
        }
    })


const stylesAtivo = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_330,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.gray_200,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    btnCheck: {
        width: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.purple_base,
    },

    lixo: {
        width: 30,
        resizeMode: "contain",
    },

    texto: {
        color: colors.gray_600,
        fontSize: 18,
        width: '77%'
    }
})