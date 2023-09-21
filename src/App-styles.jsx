import styled from 'styled-components'


export const MainContent = styled.div`
    display: flex;
    flex-direction: column-reverse;
    min-height: 100vh;

    @media (min-width: 992px){
        flex-direction: row;

    }
`;