import React from "react";
import {Routes, Route} from 'react-router-dom';

import { Home } from "../pages/Home";
import { Carrinho } from "../pages/Carrinho";
import { Modal } from "../pages/Modal";

export const Router = ()=>{
    return(
        <div>
            <Routes>
                <Route index element={<Home/>} path='/'/>
                <Route element={<Carrinho/>} path='/Carrinho'/>
                <Route element={<Modal/>} path='/Modal'/>
            </Routes>
        </div>
    )
}