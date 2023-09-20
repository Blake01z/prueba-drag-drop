import styled from 'styled-components'


export const MainContent = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px){
        flex-direction: row;
    }
`;