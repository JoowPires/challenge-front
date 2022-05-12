import { Logo } from '../Logo';
import { ActionMenu } from '../ActionMenu';
import * as s from './styles';

export function Navbar() {
    return (
        <s.Navbar>
            <Logo />
            <ActionMenu />
        </s.Navbar>
    )
}
