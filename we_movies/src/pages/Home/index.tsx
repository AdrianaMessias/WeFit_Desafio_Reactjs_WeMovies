import React, {useContext} from "react";

import { CarrinhoContext } from "../../Context/carrinhoContext";
import './style.css';

/*icons */
import {MdAddShoppingCart} from 'react-icons/md';

/*Components */
import { Spinner } from "../../components/Spinner";

export const Home = ()=>{
    const {produtos, carrinho, handleAdd} = useContext(CarrinhoContext);
    let qtd: number;
    return(
        <div className="container">
            {produtos.length <= 0 ? <Spinner /> :
            <main>
                {produtos.map((value)=>
                <div className="cards" key={value.id}>
                    <img src={value.image} alt={`Capa filme ${value.title}`} width={147} height={188}/>
                    <p>{value.title}</p>
                    <p>R$ {value.price.toFixed(2).toString().replace('.',',')}</p>
                    
                    <button className={(carrinho.find((el)=> el.id === value.id))?'green':'blue'} onClick={()=> handleAdd(value.id)}>
                        <MdAddShoppingCart size={12}/>
                        {(carrinho.find((el)=> el.id === value.id ? qtd = el.quantidade : qtd = 0) ? ` ${qtd} Item Adicionado` : ` 0 Adicionar ao Carrinho`)}
                    </button>
                </div>
                )}
            </main>
            }
        </div>
    )
}