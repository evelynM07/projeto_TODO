import {Text, Image, View, StyleSheet} from "react-native";
import colors from "../desing/colors";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/prancheta.png')} />
            <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitulo}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 20,
    },

    titulo: {
        color: colors.gray_500,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30
    },

    subtitulo: {
        color: colors.gray_500,
        fontSize: 18,
    }

})