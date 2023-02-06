import React from "react";

export interface IcarrinhoContext{
    produtos: Iitens[],
    carrinho: IaddCart[],
    itensCart: number,
    totalCart: number,
    handleAdd: (id:number)=>void,
    handleRemove: (id:number) =>void
}

export interface Ichildren{
    children: React.ReactNode;
}

export interface Iitens{
    id: number,
    title: string
    price: number,
    image: string,
}

export interface IaddCart{
    produtos: Iitens,
    quantidade: number,
    carrinho: boolean,
    id:number
}


