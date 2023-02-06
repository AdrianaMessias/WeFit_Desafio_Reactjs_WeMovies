import React from "react";

/*Components */
import { Button } from "../../components/Button";

/*Imagens */
import Sucesso from '../../assets/sucesso.png';

import './style.css';

export const Modal = ()=>{
    return(
        <div className="container">
        <> 
            <section className="bg_shopping">
                <h3>Compra realizada com sucesso!</h3>
                <img src={Sucesso} alt="Carrinho vazio" width={250}/>
                <Button to={'/'} title="Voltar" /> 
            </section>
        </>
       </div>
    )
}