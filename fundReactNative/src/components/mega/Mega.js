import React, { Component, Fragment } from 'react'
import { Text, TextInput, Button, View } from 'react-native'
import Style from '../style'
import MegaNumero from '../mega/MegaNumero'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 1000
    //     }
    // }


    //PRIMEIRA SOLUÇÃO
    // constructor(props){
    //     super(props)

    //     this.alterarQtNumeros = this.alterarQtNumeros.bind(this)
    // // }

    // alterarQtNumero(qtde) {
    //     this.setState({ qtdeNumeros: qtde })
    // }

    alterarQtNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros).fill().reduce(
            nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // Segunda forma de gerarNumeros
    // gerarNumeros = () => {
    //     const { qtdeNumeros } = this.state
    //     console.warn(qtdeNumeros)
    //     const numeros = []

    //     for (let i = 0; i < qtdeNumeros; i++) {
    //         const n = this.gerarNumeroNaoContido(numeros)
    //         numeros.push(n)
    //     }
    //     numeros.sort((a, b) => a - b)
    //     this.setState({ numeros })
    // }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <Fragment>
                <Text style={Style.fontG}>
                    Gerador de Mega-Sena
                {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    //SEGUNDA SOLUÇÃO
                    // onChangeText={qtde => this.alterarQtNumero(qtde)}
                    onChangeText={this.alterarQtNumero}
                />
                <Button title='Gerar' onPress={this.gerarNumeros} />
                <View style={{
                    marginTop: 20,

                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    {this.exibirNumeros()}
                </View>
            </Fragment>

        )
    }

}