import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Primeiro from './components/Primeiro'
import CompOficial, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'
//import Pai from './components/direta/Pai'
import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'

// function App() {
//     return <Text>Primeiro Componente 2</Text>
// }

// export default() => <Text>Primeiro Componente!!!</Text>

export default () => (
    <SafeAreaView style={style.App}>
        <ParImpar num={3}/>

        {/* <Aleatorio x={50} y={40}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
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
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    },
})
