import React, { Component, Fragment } from 'react'
import { Text, TextInput } from 'react-native'
import Style from '../style'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros
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
        this.setState({ qtdeNumeros: qtde })
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
                    value={this.state.qtdeNumeros}
                    //SEGUNDA SOLUÇÃO
                    // onChangeText={qtde => this.alterarQtNumero(qtde)}
                    onChangeText={this.alterarQtNumero}
                />
            </Fragment>

        )
    }

}