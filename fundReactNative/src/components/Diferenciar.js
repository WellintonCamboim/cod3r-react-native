import React from 'react'
import { Text, Platform } from 'react-native'
import style from './style'

export default _ => {
    if (Platform.OS === 'android') {
        return <Text style={style.fontG}>Android</Text>
    } else if (Platform.OS === 'ios') {
        return <Text style={style.fontG}>iOS</Text>
    } else {
        return <Text style={style.fontG}>Eitaaaaa! meu, olha essa fera bicho</Text>
    }
}