import {View, StyleSheet, Image} from "react-native";
import colors from "../desing/colors";

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray_330,
    }
})