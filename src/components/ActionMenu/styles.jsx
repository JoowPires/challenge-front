import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export const div = styled.div`
    height: 100%;
    width: 16%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Search = styled(SearchIcon)`
    color: black;
    &:hover {
        cursor: pointer;
        color: #00BA16;
    }
`;

export const Person = styled(PersonIcon)`
    color: black;
    &:hover {
        cursor: pointer;
        color: #00BA16;}
`;
