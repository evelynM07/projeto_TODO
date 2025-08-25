import {View, StyleSheet} from "react-native";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import colors from "../desing/colors";
import Search from "../components/Search";
import EmptyList from "../components/EmptyList";
import Card from "../components/Card";

export default function HomeScreen() {
    return (
        <View>
            <Header />
            <FormCadastro />

            <View style={styles.botoes}>
                <BtnCont text={"Tarefas Criadas"} num={"12"} />
                <BtnCont text={"Concluídas"} num={"4"} isGreen={true} />
            </View>

            <Search />

            <EmptyList />

            <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray_200,
        paddingBottom: 20
    }
})