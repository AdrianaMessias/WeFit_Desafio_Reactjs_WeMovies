import React, {useState, useEffect, createContext}from "react";

import api from "./Api";

/*Interfaces */
import { IcarrinhoContext } from "../interfaces";
import { Ichildren } from "../interfaces";
import { Iitens } from "../interfaces";
import { IaddCart } from "../interfaces";

export const CarrinhoContext = createContext({} as IcarrinhoContext);

const CarrinhoProvider = ({children}:Ichildren)=>{
    const [produtos, setProdutos] = useState<Iitens[]>([])
    const [carrinho, setCarrinho] = useState<IaddCart[]>([])

    useEffect(()=>{
        api.get(`/products`).then((res)=>{
            setProdutos(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    /*AddProdutos */
    const handleAdd = (id: number) =>{
        const itensProd = produtos.find((item)=> item.id === id);
  
        /*Se o produto já está no carrinho */
        const adicionadoCart = carrinho.find((item) => item.produtos.id === id);

        if(adicionadoCart){
            const newCartItem: IaddCart[] = carrinho.map(itens =>{
                if(itens.produtos.id === id)({
                    ...itens,
                    quantidade: itens.quantidade++,
                })
                return itens
            })
            setCarrinho(newCartItem)
            return
        }
        /*Se o produto não está no carrinho */
        const cartItem:IaddCart = {
            produtos: itensProd!,
            quantidade: 1,
            carrinho: true,
            id: id
        }
        const newAddCart:IaddCart[] = [...carrinho, cartItem]
        setCarrinho(newAddCart)
    }

    const handleRemove = (id: number)=>{
        /*verifica se o produto já está no carrinho */
        const adicionadoCart = carrinho.find((item) => item.produtos.id === id);

        /*Se o produto for maior que 1 ele apaga apenas um do carrinho */
        if(adicionadoCart!.quantidade > 1){
            const newCartItem: IaddCart[] = carrinho.map(itens =>{
                if(itens.produtos.id === id)({
                    ...itens,
                    quantidade: itens.quantidade--,
                })
                return itens
            })
            setCarrinho(newCartItem)
            return
        }
        
        const newAddCart:IaddCart[] = carrinho.filter((item)=> item.produtos.id !== id)
        setCarrinho(newAddCart)

    }

    /*Soma a quantidade de produtos no carrinho */
    const cart = carrinho.map((value)=> value.quantidade)
    let itensCart = 0
    for(let i = 0; i<cart.length; i++){
        itensCart+=cart[i]
    }

    /*Soma o valor total dos produtos */
    const subTotal = carrinho.map((value)=> value.quantidade * value.produtos.price)
    let totalCart = 0
    for(let i=0; i<subTotal.length; i++){
        totalCart+=subTotal[i]
    }

    return(
        <CarrinhoContext.Provider value={{
            carrinho,
            produtos,
            itensCart,
            totalCart,
            handleAdd,
            handleRemove,
        }}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider;