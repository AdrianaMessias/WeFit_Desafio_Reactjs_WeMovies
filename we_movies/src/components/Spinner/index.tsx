import React from "react";
import { TailSpin } from 'react-loader-spinner'

import './style.css';

export const Spinner = ()=>{
    return(
        <div className="center">
            <TailSpin
            height="80"
            width="80"
            color="#808080"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>

    )
}