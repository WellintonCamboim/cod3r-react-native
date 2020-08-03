import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'
import CompOficial, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'

// function App() {
//     return <Text>Primeiro Componente 2</Text>
// }

// export default() => <Text>Primeiro Componente!!!</Text>

export default () => (
    <View style={style.App}>
        <MinMax min='10' max='20' />
        <MinMax min={10} max={20} />
        {/* <CompOficial />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },
})
