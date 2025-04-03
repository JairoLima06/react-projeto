import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component <{ texto: string }>   //quer dizer que vai ser criado um botao que extende de um componente react//
{
 render(){
    return(
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
 }

 export default Botao;

