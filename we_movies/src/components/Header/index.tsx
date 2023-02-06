import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { CarrinhoContext } from "../../Context/carrinhoContext";
import './style.css';

/*icons */
import {MdShoppingBasket} from 'react-icons/md';

/*imagens */
import logotipo from '../../assets/logotipo.png';

export const Header = ()=>{
    const {itensCart} = useContext(CarrinhoContext);

    return(
        <header>
            <img src={logotipo} alt="logotipo da empresa" />
            <div className="dados_carrinho">
                <p>Meu Carrinho</p>
                <span>{itensCart} itens</span>
                <Link to='/Carrinho'>
                    <MdShoppingBasket size={25} color='#ffffff' />
                </Link>
            </div>
        </header>
    )
}