import useGeneral from '../../hooks/useGeneral';

//Icons
import Text from '../../assets/icons/text2.svg'
import Image from '../../assets/icons/image2.svg'
import Table from '../../assets/icons/table2.svg'

import { DropDownMain, 
        ContainerDragDown, 
        DragContainer, 
        Drag,
        FileContent } from './dropdown-menu-styles';

const DropdowmMenu = () => {

  const { images, any, text, dragginOver, onDropper } = useGeneral();

  return (
    <DropDownMain>
      <ContainerDragDown>
        <DragContainer
          onDragOver={(e) => dragginOver(e)}
          onDrop={(e) => onDropper(e, 'Header')}
        >
          <h3>Header</h3>
          {
            images.length <= 0 ? (
              <Drag>
                <p>Drag and drop an element within this area.</p>
              </Drag>
            ) : (
              images.map((img) => (
                <FileContent key={img.id}>
                  <img src={Image} alt={img.type} />
                  <p>{img.type} #{img.id}</p>
                </FileContent>
              ))
            )
          }
        </DragContainer>
        <DragContainer
          onDragOver={(e) => dragginOver(e)}
          onDrop={(e) => onDropper(e, 'Body')}
        >
          <h3>Body</h3>
          {
            any.length <= 0 ? (
              <Drag>
                <p>Drag and drop an element within this area.</p>
              </Drag>
            ) : (
              any.map((doc) => (
                <FileContent key={doc.id}>
                  <img src={(doc.type === 'Image') ? Image : (doc.type === 'Text') ? Text : Table } alt={doc.type} />
                  <p>{doc.type} #{doc.id}</p>
                </FileContent>
              ))
            )
          }
        </DragContainer>
        <DragContainer
          onDragOver={(e) => dragginOver(e)}
          onDrop={(e) => onDropper(e, 'Footer')}
        >
          <h3>Footer</h3>
          {
            text.length <= 0 ? (
              <Drag>
                <p>Drag and drop an element within this area.</p>
              </Drag>
            ) : (
              text.map((texto) => (
                <FileContent key={texto.id}>
                  <img src={Text} alt={texto.type} />
                  <p>{texto.type} #{texto.id}</p>
                </FileContent>
              ))
            )
          }
        </DragContainer>
      </ContainerDragDown>
    </DropDownMain>
  )
}

export default DropdowmMenu