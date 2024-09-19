import './App.css';
import SideBar from './Component/SldeBar/SideBar';
import Main from './Component/Main/Main';
import Player from './Component/Player/Player';
function App() {
  return (
    <div className="App">
      <div className='div1'>
        <SideBar/>
        <Main/>
      </div>
      <Player />
    </div>
  );
}

export default App;
