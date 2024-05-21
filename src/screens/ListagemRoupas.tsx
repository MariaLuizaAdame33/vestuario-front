import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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



const renderItem = ({ item }: { item: Roupas }) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.Texto1}>{item.tecido}</Text>
        <Text style={styles.Textovalor}>{item.valor}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.images}/>
        <TouchableOpacity>
                    <Image source={require('./assets/images/batata.jpeg')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
        
    </TouchableOpacity>
);


function ListagemRoupas(): React.JSX.Element {

    const [produtos, setProdutos] = useState<Produto[]>([]);


    useEffect(() => {
        listarProdutos();
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.209:8000/api/produtos');
            if (response.status === 200) {
                setProdutos(response.data);
                
            }
        } catch (error) {
            console.log(error);
        }
    }

    const navigation= useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('./assets/images/fundo.jpg')} resizeMode="cover" style={styles.imagebackground}>
            <StatusBar backgroundColor="#FF1493" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText} >𝓐𝓻𝓸𝓶𝓪 𝓮 𝓼𝓪𝓫𝓸𝓻𝓮𝓼</Text>
                <Text style={styles.Textocima}>𝐂𝐀𝐑𝐃𝐀𝐏𝐈𝐎 🍴</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            </ImageBackground>

            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('./assets/images/home.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('CadastroProdutos')}>
                    <Image source={require('./assets/images/profile.png')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('CadastroProdutos')}>
                    <Image source={require('./assets/images/cardapio.webp')}
                        style={styles.footerIcon} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image source={require('./assets/images/pedidos.webp')}
                        style={styles.footerIcon} />
                </TouchableOpacity>
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    item: {
        backgroundColor: '#FF1493',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:15,
        borderColor:'black',
        borderWidth:4

    },
    header: {
        backgroundColor: '#C71585',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 107

    },
    headerText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30

    },
    images:{
        width: 200,
        height: 200

    },
    imagebackground: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        alignItems: 'center'
    },
    Texto1: {
        fontSize:20,
        borderBottomWidth:2,
        borderBottomRightRadius:-200,
        borderBottomColor:'white'
    },
    Textovalor:{
        fontSize:15,
        color:'white'
    },
    Textocima:{
        fontSize:20,
        color: 'white'
    }
    
})

export default ListagemRoupas;