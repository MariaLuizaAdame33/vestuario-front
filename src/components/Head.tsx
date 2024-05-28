import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Head(): React.JSX.Element {
    return (
        <View style={styles.header}>
                <Text style={styles.headerText} >Ame Fashion</Text>
                <Text style={styles.Textocima}></Text>
            </View>
    );
}

const styles = StyleSheet.create({
    containr: {
        flex: 1
    },
    header: {
        backgroundColor: '#C71585',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    Textocima:{
        fontSize:20,
        color: 'white'
    }

});

export default Head;