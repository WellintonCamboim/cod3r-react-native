import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Style from '../style'

export default ({ num }) => {
    return (
        <View style={style.container}>
            <Text style={Style.fontG, style.num}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        margin: 5,
        borderRadius: 25,
        
    },

    num: {
        color: '#FFF',
        fontSize: 24,
        alignItems: "center",
        alignContent: "center",
        textAlign: "center"
    },
})

