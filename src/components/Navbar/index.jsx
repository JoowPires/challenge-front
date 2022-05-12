import { Logo } from '../Logo';
import { ActionMenu } from '../ActionMenu';
import * as s from './styles';

export function Navbar() {
    return (
        <s.Navbar>
            <Logo />
            <s.ul>
                <s.li>Lorem Ipsum</s.li>
                <s.li>Lorem Ipsum</s.li>
                <s.li>Lorem Ipsum</s.li>
                <s.li>Lorem Ipsum</s.li>
                <s.li>Lorem Ipsum</s.li>
            </s.ul>
            <ActionMenu />
        </s.Navbar>
    )
}
