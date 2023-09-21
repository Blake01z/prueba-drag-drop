import useGeneral from '../../hooks/useGeneral';

import { SidebBar, ContainerIcons, ContainerCabeceraSide } from './side-bar-styles';

//Icons
import Text from '../../assets/icons/text.svg'
import Image from '../../assets/icons/image.svg'
import Table from '../../assets/icons/table.svg'

//Arreglo de iconos
const icons = [
    {
        name: 'Text',
        src: Text,
    },
    {
        name: 'Image',
        src: Image,
    },
    {
        name: 'Table',
        src: Table,
    },
]

const SideBar = () => {

  const { startDrag } = useGeneral();

  return (
    <SidebBar>
      <ContainerCabeceraSide>
        <h1>Elements</h1>

        <ContainerIcons>
          {
              icons.map((icon,index) => (
                  <img 
                    src={icon.src} 
                    alt={icon.name} 
                    key={index} 
                    draggable
                    onDragStart={(e) => {startDrag(e,icon,'Sidebar')}}
                    />
              ))
          }
        </ContainerIcons>
      </ContainerCabeceraSide>
    </SidebBar>
  )
}

export default SideBar
