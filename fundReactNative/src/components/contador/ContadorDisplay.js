import React, { Fragment, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import style from '../style'

export default props => {
    return (
        <Fragment>
            <View style={styleDisplay.Display}>
                <Text style={[style.fontG, styleDisplay.DisplayText]}>
                    {props.num}
                </Text>
            </View>
        </Fragment>
    )
}
const styleDisplay = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF'
    }

})