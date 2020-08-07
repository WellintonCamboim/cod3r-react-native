import React, { Fragment } from 'react'
import { Text, FlatList } from 'react-native'
import style from '../style'

import produtos from './produtos'

export default props => {

    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <Fragment>
            <Text style={style.fontG}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            // renderItem={({ item: p }) => {
            //     return <Text>{p.id} {p.nome}</Text>
            // }}
            >
            </FlatList >
        </Fragment >
    )
}