import { CartMenu } from '../CartMenu';
import { useState } from 'react';

import * as s from './styles';


export function Cart() {

    const [cart, setCart] = useState(false);        // (False) = primeira variavel

    function clicarCart() {
        setCart(!cart);
    }

    return (
        <div>
        <s.Shopping fontSize="large" onClick={clicarCart} />
        {cart ? <CartMenu /> : <div />}
        </div>      
        
    )
}