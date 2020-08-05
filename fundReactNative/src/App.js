import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'
import CompOficial, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Temp from './components/Temp'

// function App() {
//     return <Text>Primeiro Componente 2</Text>
// }

// export default() => <Text>Primeiro Componente!!!</Text>

export default () => (
    <View style={style.App}>
        
        {/* <Aleatorio x={50} y={40}/>
        <Contador />
        <Contador inicial={2} passo={5}/>
        <Botao />
        <Titulo principal="Cadastro do Produto" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio x={30} y={24}/>
        <Aleatorio x={10} y={40}/>
        <Aleatorio x={20} y={44}/>
        <Aleatorio x={10} y={40}/> */}
        {/* <MinMax min='10' max='20' />
        <MinMax min={10} max={20} /> */}
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
