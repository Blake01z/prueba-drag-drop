import styled from 'styled-components'


export const SidebBar = styled.div`
    background-color: #FAFAFA;
    padding: 10px 0 30px 0;
    position: sticky;
    top:0;
    h1{
        color: #3A6B88;
        font-size: 18px;
        font-weight: 600;
        margin: 30px auto 10px auto;
        padding: 0;
        width: 90%;
    }

    @media (min-width: 992px){
        flex: 25%;
        padding: 0;
    }
`;

export const ContainerCabeceraSide = styled.div`
    position: sticky;
    top:0;
`;

export const ContainerIcons = styled.div`
    
    display: flex;
    justify-content: space-evenly;

    @media (min-width: 992px){
        margin: 30px auto;
        width: 90%;
    }

    img{
        cursor: pointer;
        width: 110px;
    }
`;