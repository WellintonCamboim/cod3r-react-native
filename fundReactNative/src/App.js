import React from 'react'
import { Text, View } from 'react-native'
import Primeiro from './components/Primeiro'
import CompOficial, { Comp1, Comp2 } from './components/Multi'

// function App() {
//     return <Text>Primeiro Componente 2</Text>
// }

// export default() => <Text>Primeiro Componente!!!</Text>

export default () => (
    <View>
        <CompOficial />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
)
