    import {TextInput, StyleSheet} from "react-native";
    import colors from "../desing/colors";


    export default function Search({texto, setTexto}) {
        return (
            <>
                <TextInput style={styles.input}
                           placeholder={"Busque por uma tarefa"}
                           value={texto}
                           onChangeText={setTexto}/>
            </>
        )
    }

    const styles = StyleSheet.create({
       input: {
           backgroundColor: 'white',
           color: colors.gray_500,
           fontSize: 20,
           padding: 15,
           borderRadius: 10,
           elevation: 3,
           marginHorizontal: 20,
           marginVertical: 15
       }
    })