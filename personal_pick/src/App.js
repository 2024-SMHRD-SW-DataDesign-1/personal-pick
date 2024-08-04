// npm i -s react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Join from './page/Join';
import Login from './page/Login';
import Search from './page/Search'
import Detailinfo from './page/Detailinfo';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/join' element={<Join />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                    <Route path='/detailinfo' element={<Detailinfo />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
