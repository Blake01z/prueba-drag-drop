import { createContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({children}) => {

    // State de los datos
    const [images, setImages] = useState([])
    const [any, setAny] = useState([])
    const [text, setText] = useState([])

    // Funcion para obtener la data del elemento arrastrado del sidebar
    const startDrag = (e, icon) => {
        e.dataTransfer.setData('itemType', icon.name)
    }

    // Funcion para parar el evento de drag
    const dragginOver = (e) => {
        e.preventDefault();
    }

    // Funcion para crear un ID unico
    function generarUUID() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let identificador = '';

        for (let i = 0; i < 3; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            identificador += caracteres.charAt(indiceAleatorio);
        }
        return identificador;
      }
    

    // Funcion para obtener el elemento arrastrado del sidebar
    const onDropper = (e, area) => {
        const itemId = e.dataTransfer.getData('itemType')
        switch(area) {
            case 'Header':
                if(itemId === 'Image'){
                    const id = generarUUID();
                    setImages([{
                        id:id,
                        type:itemId,
                    }, ...images])
                }else{
                    return null
                }
                break;
            case 'Body':
                    const id = generarUUID();
                    setAny([{
                        id:id,
                        type:itemId,
                    },...any])
                break;
            case 'Footer':
                if(itemId === 'Text'){
                    const id = generarUUID();
                    setText([{
                        id:id,
                        type:itemId,
                    }, ...text])
                }else{
                    return null
                }
                break;
            default:
          }
    }


    return(
        <GeneralContext.Provider
            value={{
                images,
                any,
                text,
                startDrag,
                dragginOver,
                onDropper
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}

export {
    GeneralProvider
}

export default GeneralContext;