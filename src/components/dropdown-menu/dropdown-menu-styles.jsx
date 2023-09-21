import styled from 'styled-components'


export const DropDownMain = styled.div`

    @media (min-width: 992px){
        flex: 75%;
    }
`;

export const ContainerDragDown = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const DragContainer = styled.div`

    background-color: #F6F6F6;
    border-radius: 4px;
    margin-top: 20px;
    padding: 16px 10px;
    width: 90%;
    
    h3{
        color: #3A6B88;
        font-size: 14px;
        width:90%;
        font-weight: 600;
    }
`;

export const Drag = styled.div`
    height: 138px;
    border: 1px dashed;
    border-color: #3A6B88;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items:center;

    p{
        font-size: 14px;
    }
`;

export const FileContent = styled.div`
    position: relative;
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    flex-direction:column;
    height: 138px;
    justify-content: center;
    margin-bottom:10px;
    cursor: pointer;
    border-radius: 1px;

    p{
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #3A6B88;
    }
`;

export const ContainerIconDelete = styled.div`
    position: absolute;
    right: -10px;
    top: -7px;

    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`;