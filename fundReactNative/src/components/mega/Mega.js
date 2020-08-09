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

    alterarQtNumeros(qtde) {
        this.setState({ qtNumeros: qtde })
    }

    render() {
        return (
            <Fragment>
                <Text style={Style.fontG}>
                    Gerador de Mega-Sena
                {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtNumeros}
                />

            </Fragment>

        )
    }

}