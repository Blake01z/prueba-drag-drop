import { createContext, useState } from 'react';

const GeneralContext = createContext();

const GeneralProvider = ({children}) => {

    // State de los datos
    const [images, setImages] = useState([])
    const [any, setAny] = useState([])
    const [text, setText] = useState([])

    // Funcion para obtener la data del elemento arrastrado del sidebar
    const startDrag = (e, icon, from, idCurrently = '') => {
        if(idCurrently === ''){
            e.dataTransfer.setData('itemType', icon.name)
            e.dataTransfer.setData('from', from)
        }else{
            e.dataTransfer.setData('itemType', icon.name)
            e.dataTransfer.setData('from', from)
            e.dataTransfer.setData('idCurrently', idCurrently)
        }
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

    // Funcion para eliminar un elemento de un arreglo
    const deleteItem = (id,category) => {
        if(category === 'Images'){
            const nuevosObjetos = images.filter(objeto => objeto.id !== id);
            setImages(nuevosObjetos);
        }else if(category === 'Any'){
            const nuevosObjetos = any.filter(objeto => objeto.id !== id);
            setAny(nuevosObjetos);
        }else if(category === 'Texto'){
            const nuevosObjetos = text.filter(objeto => objeto.id !== id);
            setText(nuevosObjetos);
        }
    }

    // Funcion para ordenar los arreglos 
    const arrayOrder = (idCurrently,idDestination, type) => {
        if(type === 'Images'){
            const indexObjetoACambiar = images.findIndex(obj => obj.id === idCurrently);
            const indexObjetoDestino = images.findIndex(obj => obj.id === idDestination);
            const objetoMovido = images[indexObjetoACambiar];
            const objetosActualizados = [...images];
            objetosActualizados.splice(indexObjetoACambiar, 1);
            objetosActualizados.splice(indexObjetoDestino, 0, objetoMovido);
            setImages(objetosActualizados);
        }else if(type === 'Any'){
            const indexObjetoACambiar = any.findIndex(obj => obj.id === idCurrently);
            const indexObjetoDestino = any.findIndex(obj => obj.id === idDestination);
            const objetoMovido = any[indexObjetoACambiar];
            const objetosActualizados = [...any];
            objetosActualizados.splice(indexObjetoACambiar, 1);
            objetosActualizados.splice(indexObjetoDestino, 0, objetoMovido);
            setAny(objetosActualizados);
        }else{
            const indexObjetoACambiar = text.findIndex(obj => obj.id === idCurrently);
            const indexObjetoDestino = text.findIndex(obj => obj.id === idDestination);
            const objetoMovido = text[indexObjetoACambiar];
            const objetosActualizados = [...text];
            objetosActualizados.splice(indexObjetoACambiar, 1);
            objetosActualizados.splice(indexObjetoDestino, 0, objetoMovido);
            setText(objetosActualizados);
        }
    }

    // Funcion para obtener el elemento arrastrado del sidebar
    const onDropper = (e, area) => {
        const itemId = e.dataTransfer.getData('itemType')
        const from = e.dataTransfer.getData('from')
        const idCurrently = e.dataTransfer.getData('idCurrently')
        let idDestination = e.target.outerText
        idDestination = idDestination.split("#")[1]
        switch(area) {
            case 'Header':
                if(itemId === 'Image' && from === 'Sidebar'){
                    const id = generarUUID();
                    setImages([{
                        id:id,
                        name:itemId,
                    }, ...images])
                }else if(itemId === 'Image' && from === 'Images'){
                    // Encuentra los índices de los objetos que deseas cambiar
                    arrayOrder(idCurrently,idDestination, 'Images')
                }else if(itemId === 'Image' && from === 'Any'){
                    // Encuentra el objeto en el primer arreglo con el ID dado
                    const objetoATransferir = any.find(objeto => objeto.id === idCurrently);
                    if (objetoATransferir) {
                        // Copia el primer arreglo sin el objeto a transferir
                        const nuevoPrimerArreglo = any.filter(item => item.id !== idCurrently);
                        // Agrega el objeto al segundo arreglo
                        const nuevoSegundoArreglo = [...images, objetoATransferir];
                        // Actualiza los estados de los arreglos
                        setAny(nuevoPrimerArreglo);
                        setImages(nuevoSegundoArreglo);
                    }
                }else{
                    return;
                }
                break;
            case 'Body':
                if(from === 'Sidebar'){
                    const id = generarUUID();
                    setAny([{
                        id:id,
                        name:itemId,
                    },...any])
                }else if(from === 'Any'){
                    // Encuentra los índices de los objetos que deseas cambiar
                    arrayOrder(idCurrently,idDestination, 'Any')
                }else if(from === 'Images'){
                    // Encuentra el objeto en el primer arreglo con el ID dado
                    const objetoATransferir = images.find(objeto => objeto.id === idCurrently);
                    if (objetoATransferir) {
                        // Copia el primer arreglo sin el objeto a transferir
                        const nuevoPrimerArreglo = images.filter(item => item.id !== idCurrently);
                        // Agrega el objeto al segundo arreglo
                        const nuevoSegundoArreglo = [...any, objetoATransferir];
                        // Actualiza los estados de los arreglos
                        setImages(nuevoPrimerArreglo);
                        setAny(nuevoSegundoArreglo);
                      }
                }else{
                    return;
                }
                break;
            case 'Footer':
                if(itemId === 'Text' && from === 'Sidebar'){
                    const id = generarUUID();
                    setText([{
                        id:id,
                        name:itemId,
                    }, ...text])
                }else if(from === 'Texto'){
                    // Encuentra los índices de los objetos que deseas cambiar
                    arrayOrder(idCurrently,idDestination, 'Texto')
                }else{
                    return;
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
                onDropper,
                deleteItem
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