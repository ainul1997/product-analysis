
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import DashBoard from './component/DashBoard/DashBoard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Reviews from './component/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/dashboard' element={<DashBoard></DashBoard>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NotFound></NotFound>} />

      </Routes>
    </div>
  );
}

export default App;
