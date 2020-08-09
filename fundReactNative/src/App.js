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
// import Pai from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'
import UsuarioLogado from './components/UsuarioLogado'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import DigiteSeuNome from './components/DigiteSeuNome'
import Quadrado from './components/layout/Quadrado'
import FlexboxV1 from './components/layout/FlexboxV1'
import FlexboxV2 from './components/layout/FlexboxV2'
import FlexboxV3 from './components/layout/FlexboxV3'
import FlexboxV4 from './components/layout/FlexboxV4'
import Mega from './components/mega/Mega'


// function App() {
//     return <Text>Primeiro Componente 2</Text>
// }

// export default() => <Text>Primeiro Componente!!!</Text>

export default () => (
    <SafeAreaView style={style.App}>

        <Mega />

        {/* <Aleatorio x={50} y={40}/>
        <FlexboxV4 />
        <FlexboxV3 />
        <FlexboxV2 />
        <FlexboxV1 />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Wellinton', email: 'wellinton@gmail.com' }} />
        <UsuarioLogado usuario={{ nome: 'Afonso Primeiro' }} />
        <UsuarioLogado usuario={{ email: 'ana@hotmail.com' }} />
        <UsuarioLogado usuario={{}} />
        <Familia>
            <Membro nome="Bia" sobrenome="Aruda"/>
            <Membro nome="Carlos" sobrenome="Fonseca"/>
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Betriz" sobrenome="Silva"/>
            <Membro nome="Betriz" sobrenome="Silva"/>
            <Membro nome="Betriz" sobrenome="Silva"/>
            <Membro nome="Betriz" sobrenome="Silva"/>
        </Familia>
        <ParImpar num={3}/>
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
