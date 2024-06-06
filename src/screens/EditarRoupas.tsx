
import React, { useEffect, useState } from "react"; // Removido FormEvent
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const Editar: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [tecido, setTecido] = useState<string>('');
    const [tamanho, SetTamanho] = useState<string>('');
    const [cor, SetCor] = useState<string>('');
    const [categoria, SetCategoria] = useState<string>('');
    const [fabricacao, SetFabricação] = useState<string>('');
    const [descricao, SetDescricao] = useState<string>('');
    const [estacao, SetEstacao] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { item } = route.params;
        setId(item.id);
        setTecido(item.tecido);
        SetTamanho(item.tamanho);
        SetCategoria(item.categoria);
        SetCor(item.cor);
        SetFabricação(item.categoria);
        SetEstacao(item.estacao);
        SetDescricao(item.descricao);
    }, []);

    const atualizar = () => {
        const dadosDasRoupas = {
            id: id,
            tecido: tecido,
            tamanho: tamanho,
            categoria: categoria,
            cor: cor,
            fabricacao: fabricacao,
            estacao: estacao,
            descricao: descricao,
           
        };
        axios.put("'http://10.137.11.203/vestuario/public/api/editar", dadosDasRoupas, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.data);
            navigation.goBack(); // redireciona para a tela anterior após a atualização bem-sucedida
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#3a415a' barStyle="light-content" />
            <Head />
            <View>
                <TextInput value={tecido}
                 onChangeText={setTecido}
                  style={styles.input} />

                <TextInput value={tamanho}
                 onChangeText={SetTamanho}
                   style={styles.input} />

                <TextInput value={categoria}
                 onChangeText={SetCategoria}
                  style={styles.input} />

                <TextInput value={cor}
                 onChangeText={SetCor}
                  style={styles.input} />

                <TextInput value={fabricacao}
                 onChangeText={SetFabricação}
                  style={styles.input} />

                <TextInput value={estacao}
                 onChangeText={SetEstacao}
                  style={styles.input} />

                <TextInput value={descricao}
                 onChangeText={SetDescricao}
                  multiline
                   style={styles.input} />
                   
                <TouchableOpacity onPress={atualizar} style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#3a415a',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Editar;