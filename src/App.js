import MenuDirectory from './routes/menu-directory/menu-directory.component';
import GameArea from './routes/game-area/game-area.component';

import { Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route index element={<MenuDirectory />}></Route>
        <Route path='/game-area' element={<GameArea />}></Route>
      </Routes>
    </div>
  );
}

export default App;
