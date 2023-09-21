import { GeneralProvider } from './context/GeneralProvider';

import { MainContent } from './App-styles';

import DropdowmMenu from './components/dropdown-menu/DropdowmMenu';
import SideBar from './components/sidebar/SideBar';

function App() {

  return (
    <GeneralProvider>
      <MainContent>
        <DropdowmMenu/>
        <SideBar/>
      </MainContent>
    </GeneralProvider>
  );
}

export default App;
