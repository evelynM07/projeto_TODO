import {TextInput, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import colors from "../desing/colors";

export default function FormCadastro() {
    return (
        <View style={styles.container}>
            <TextInput placeholder={"Adicione uma Tarefa!"}
                style={styles.input} />

            <TouchableOpacity style={styles.btn}
                              onPress={() => alert("Clicou")}>

                <Image style={styles.img}
                    source={require('../assets/add.png')} />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        gap: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: -40
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        fontSize: 25,
        width: "80%",
        color: colors.gray_500,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: colors.purple_dark,
        alignItems:'center',
        justifyContent: 'center',
        width: "20%",
        borderRadius: 10,
    },
    img: {
        width: 30,
        height: 30,
    }
})