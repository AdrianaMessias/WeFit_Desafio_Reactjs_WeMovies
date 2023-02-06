import React from "react";
import {Link} from 'react-router-dom';

import './style.css';

type Props = {
    title: string,
    to?: string,
}

export const Button = ({title, ...rest}:Props)=>{
    return(
        <Link to='' className="btn"type="submit" {...rest}>
            {title}
        </Link>
    )
}