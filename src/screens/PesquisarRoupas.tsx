import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Head from "../components/Head";
import { useNavigation } from "@react-navigation/native";

interface Roupas {
    id: number;
    tecido: string;
    tamanho: string;
    cor: string;
    categoria: string;
    fabricacao: string;
    estacao: string;
    descricao: string;
}

function PesquisarRoupas(): React.JSX.Element {

    const navigation = useNavigation();

    const produtos: Produto[] = [
        {
            id: 1,
            tecido: 'algodão',
            tamanho: 'MM',
            cor: 'Amarelo',
            categoria: 'Adulto',
            fabricacao: 'BR',
            estacao: 'Frio',
            descricao: ' Camiseta Linda e confortavel'
        },
        {
            id: 2,
            tecido: 'laicra',
            tamanho: 'GG',
            cor: 'Roxo',
            categoria: 'Kids',
            fabricacao: 'BR',
            estacao: 'Frio',
            descricao: ' Camiseta Linda e confortavel'
        },
    ]

    const selecionarProduto = (roupas: Roupas) =>{
        navigation.navigate('EditarRoupa',{roupas});
    }

    const renderItem = ({ item }: {item: Produto }) => {
        return (
            <TouchableOpacity style={styles.menuItem}
            onPress={()=> selecionarProduto(item)}>
                <Image source={require('../assets/images/hamburger.png')}
                style={styles.image}/>
                <View style={styles.itemDetails}>
                    <Text style={styles.tissue}>{item.tecido}</Text>
                    <Text style={styles.size}>{item.tamanho}</Text>
                    <Text style={styles.color}>{item.cor}</Text>
                    <Text style={styles.category}>{item.categoria}</Text>
                    <Text style={styles.manufacturing}>{item.fabricacao}</Text>
                    <Text style={styles.station}>{item.estacao}</Text>
                    <Text style={styles.description}>{item.descricao}</Text>
                
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'red'} barStyle={'light-content'}/>
            <Head/>
            <FlatList
               data={produtos}
               renderItem={renderItem}
               keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}
               contentContainerStyle={styles.menuList}
               />
               
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails:{
        marginLeft: 10,
        flex: 1,
    },
    tissue: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#666'
    },
    size: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    color: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    manufacturing: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    station: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    menuList:{
        flexGrow: 1
    }
})

export default PesquisarRoupas;