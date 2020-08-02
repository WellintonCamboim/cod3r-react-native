import React from 'react'
import { Text } from 'react-native'
import StylePadrao from './style'

function Comp() {
    return <Text style={StylePadrao.fontG}>Componente #Oficial!</Text>
}

function Comp1() {
    return <Text style={StylePadrao.fontG}>Componente #01!</Text>
}

function Comp2() {
    return <Text style={StylePadrao.fontG}>Componente #02!</Text>
}

export { Comp1, Comp2 }
export default Comp