import { SidebBar, ContainerIcons } from './side-bar-styles';

//Icons
import Text from '../../assets/icons/text.svg'
import Image from '../../assets/icons/image.svg'
import Table from '../../assets/icons/table.svg'

const icons = [
    {
        name: 'Text',
        src: Text
    },
    {
        name: 'Image',
        src: Image
    },
    {
        name: 'Table',
        src: Table
    },
]

const SideBar = () => {
  return (
    <SidebBar>
      <h1>Elements</h1>

      <ContainerIcons>
        {
            icons.map((icon,index) => (
                <img src={icon.src} alt={icon.name} key={index}/>
            ))
        }
      </ContainerIcons>
    </SidebBar>
  )
}

export default SideBar
