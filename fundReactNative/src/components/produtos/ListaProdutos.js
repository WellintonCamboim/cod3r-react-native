import React, { Fragment } from 'react'
import { Text } from 'react-native'
import style from '../style'

import produtos from '../produtos/produtos'

//PRIMEIRA ESTRATÉGIA
// export default props => {
//     return (
//         <Fragment>
//             <Text style={style.fontG}>
//                 Lista de Produtos
//             </Text>
//             {produtos.map(p => {
//                 return <Text key={p.id}>{p.id}) {p.nome} tem preço de R$ {p.preco}</Text>
//             })}
//         </Fragment>
//     )
// }

//SEGUNDA ESTRATÉGIA
export default props => {
    function obterLista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} tem preço de R$ {p.preco}
                </Text>
            )
        })
    }

    return (
        <Fragment>
            <Text style={style.fontG}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </Fragment>
    )
}