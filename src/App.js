import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './UserPost';
import CreatePost from './UserPost/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ctreatepost' element={<CreatePost />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
