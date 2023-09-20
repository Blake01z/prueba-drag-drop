import DropdowmMenu from './components/dropdown-menu/DropdowmMenu';
import SideBar from './components/sidebar/SideBar';

import { MainContent } from './App-styles';

function App() {
  return (
   <MainContent>
      <DropdowmMenu/>
      <SideBar/>
   </MainContent>
  );
}

export default App;
