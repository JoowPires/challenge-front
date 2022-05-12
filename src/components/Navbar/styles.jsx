import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: #fff;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.11);
`;

export const ul = styled.ul`
    display: flex;
    padding: 0;
    list-style-type: none;
    align-items: center;
    justify-content: center;
`;

export const li = styled.li`
    padding: 0 10px;
    color: #4F4F4F;
    &:hover {
        color: #00BA16;
        cursor: pointer;
    }

`;