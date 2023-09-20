import styled from 'styled-components'


export const MainContent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 100%;

    @media (min-width: 992px){
        flex-direction: row;

    }
`;