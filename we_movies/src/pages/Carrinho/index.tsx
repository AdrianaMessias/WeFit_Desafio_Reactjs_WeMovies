import React, {useContext} from "react";

import { CarrinhoContext } from "../../Context/carrinhoContext";

import './style.css';

/*Components */
import { Button } from "../../components/Button";

/*Icons */
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';


/*Imagens*/
import vazio from '../../assets/vazio.png';

export const Carrinho = ()=>{
    const {carrinho, totalCart, handleRemove} = useContext(CarrinhoContext);
    let qtd:number;


    return(
       <div className="container_cart">
        <> 
        {carrinho.length <= 0 ?
            <section className="bg_shopping">
                <h3>Parece que não há nada por aqui {':('}</h3>
                <img src={vazio} alt="Carrinho vazio" width={250}/>
                <Button to={'/'} title="Voltar"/> 
            </section>
            :
            <section className="bg_shopping">
                {carrinho.map((value)=>(
                    <div className="w33" key={value.produtos.id}>
                    <div>
                        <p className="gray off">Produtos</p>
                        <img className="img_movie" src={value.produtos.image} alt={value.produtos.title} width={64} />
                    </div>
                    <div className="rTitle">
                        <p>{value.produtos.title}</p>
                        <p>R$ {value.produtos.price.toFixed(2).toString().replace('.',',')}</p>
                    </div>
                    <div className="count">
                        <p className="gray off">QTD</p>
                        <button>
                            <AiOutlineMinusCircle size={16} color="#009EDD" />
                        </button>
                        <input type="number" placeholder={(carrinho.find((el)=> el.id === value.produtos.id ? qtd = el.quantidade : qtd = 0) ? ` ${qtd}` : ` 0 `)}/>
                        <button>
                            <AiOutlinePlusCircle size={16} color="#009EDD" />
                        </button>
                    </div>
                    <div className="rCollumn">
                        <p className="gray">Subtotal</p>
                        <p>R${value.quantidade * value.produtos.price}</p>
                    </div>
                    <div>
                        <button className="trash" onClick={()=> handleRemove(value.produtos.id)}>
                            <FaTrash size={16} color="#009EDD" />
                        </button>
                    </div>
                </div>
                )

                )}

                <div className="rTotal">
                    <p><span className="gray">Total </span>R${totalCart.toFixed(2).toString().replace('.',',')}</p>
                    <Button to={'/Modal'} title="Finalizar Pedido"/>
                </div>
            </section>
        }
        </>
       </div>
    )
}