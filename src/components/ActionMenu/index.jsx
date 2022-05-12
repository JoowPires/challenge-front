import { Cart } from '../Cart';
import * as s from './styles';

export function ActionMenu() {
    return (
        <s.div>
            <s.Search fontSize='large'/>
            <s.Person fontSize='large'/>
            <Cart />
        </s.div>
    )
}