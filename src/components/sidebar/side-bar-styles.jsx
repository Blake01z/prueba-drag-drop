import styled from 'styled-components'


export const SidebBar = styled.div`
    background-color: #FAFAFA;
    padding: 10px 0 30px 0;

    h1{
        color: #3A6B88;
        font-weight: 600;
        font-size: 18px;
        padding: 0;
        margin: 30px auto;
        width: 90%;
    }

    @media (min-width: 992px){
        height: 100vh;
        flex: 25%;
        padding: 0;
    }
`;

export const ContainerIcons = styled.div`
    
    display: flex;
    justify-content: space-evenly;

    @media (min-width: 992px){
        margin: 30px auto;
        width: 90%;
    }

    img{
        width: 110px;
        cursor: pointer;
    }
`;