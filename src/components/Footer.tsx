import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Home from "../screens/Home";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return (
        <View style={styles.footer}>
            <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate('Home')}>
                <Image source={require('../assests/images/home.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Pesquisar')} >
                <Image source={require('../assests/images/pesquisa.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Listagem')}>
                <Image source={require('../assests/images/listagem.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Profile')}>
                <Image source={require('../assests/images/profile.png')}
                style={styles.footericon}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    menuList: {
        flexGrow: 1
    },
    footer:{
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingVertical: 10
    },
    footericon: {
        width: 30,
        height: 30
    },
    button:{
        backgroundColor:"#FF1493",
        height:40,
        borderRadius:8
    },
})

export default Footer;