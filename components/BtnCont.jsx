import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../desing/colors";
import {useNavigation} from "@react-navigation/native";

export default function BtnCont({
                                    text,
                                    num,
                                    page,
                                    isGreen = false}) {

    const navigation = useNavigation();

    function mudarPagina() {
        if (page) {
            navigation.navigate(page);
        }

    }


    let cont = {
            backgroundColor: colors.purple_light,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            padding: 10
    }

    let textCont = {
            color: colors.purple_dark,
            fontSize: 12,
            fontWeight: 'bold',

    }

    if (isGreen) {
        textCont.color = colors.green_dark
        cont.backgroundColor = colors.green_light
    }

    return (
        <TouchableOpacity style={styles.btn}
            onPress={ mudarPagina}>

            <Text style={styles.texto} >{text}</Text>

            <View style={cont}>
                <Text style={textCont}>{num}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    texto: {
        color: colors.gray_500,
        fontSize: 20,
        fontWeight: 'bold',
    },
})