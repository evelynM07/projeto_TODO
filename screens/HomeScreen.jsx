import {View, StyleSheet, ScrollView} from "react-native";
import {useState} from "react";
import Header from "../components/Header";
import FormCadastro from "../components/FormCadastro";
import BtnCont from "../components/BtnCont";
import colors from "../desing/colors";
import Search from "../components/Search";
import EmptyList from "../components/EmptyList";
import Card from "../components/Card";
import React from "react";

export default function HomeScreen() {

    const[lista, setLista] = useState([]);
    const[novaTarefa, setNovaTarefa] = useState("");
    const[busca, setBuscar] = useState("");

    function cadastrarTarefa() {
        let aux = [
            ...lista,
            {
                tarefa: novaTarefa,
                concluido: false
            }
        ]

        setLista(aux)
        setNovaTarefa("")
        console.log(aux)
    }

    function numTarefasConcluidas(){
        let concluidas = lista.filter(tarefa => tarefa.concluido);
        return concluidas.length; //numero (quantidade) de tarefas encontradas
    }

    function numTarefasAtivas() {
        let ativas = lista.filter(tarefa => !tarefa.concluido);
        return ativas.length;
    }

    function concluirTarefas(index) {
        let ListaAux = [...lista]
        ListaAux[index].concluido = !ListaAux[index].concluido
        setLista(ListaAux)
    }

    function excluirTarefas(index) {
        let ListaAux = [...lista]
        ListaAux.splice(index, 1)
        setLista(ListaAux)
    }



    return (
        <ScrollView>
            <Header />
            <FormCadastro fnCadastrar={cadastrarTarefa} texto={novaTarefa} setTexto={setNovaTarefa} />

            <View style={styles.botoes}>
                <BtnCont text={"Tarefas Criadas"} num={numTarefasAtivas()} />
                <BtnCont text={"Concluídas"} num={numTarefasConcluidas()} isGreen={true} />
            </View>

            <Search texto={busca} setTexto={setBuscar} />

            {lista.length === 0 && <EmptyList />}

            {lista.sort((a, b) => a.concluido - b.concluido)
                .map((item, index) => {
                    if (item.tarefa.toLowerCase().includes(busca.toLowerCase())) {
                        return (
                            <Card key={index}
                                  texto={item.tarefa}
                                  concluido={item.concluido}
                                  fnExcluir={() => excluirTarefas(index)}
                                  fnConcluir={() => concluirTarefas(index)}
                            />
                        )
                    }

                    return null

})}




        </ScrollView>
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