// npm i -s react-router-dom
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './page/home/Home';
import Search from './page/search/Search';
import Mypage from './page/backendtest/Mypage';
import Detailinfo from './page/detailinfo/Detailinfo';
import Login from './page/backendtest/Login';
import Join from './page/backendtest/Join';
import Order from './page/backendtest/Order'
import { createStore } from 'redux';
import personalReducer from './redux/reducer/reducer';
import { Provider } from 'react-redux';

import './App.css'
import './index.scss'
import TotalRanking from './page/totalitem/TotalRanking';
const store = createStore(personalReducer)


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/join' element={<Join />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/mypage' element={<Mypage />}></Route>
                        <Route path='/order' element={<Order />}></Route>
                        <Route path='/search/:value' element={<Search />}></Route>
                        <Route path='/search' element={<Search />}></Route>
                        <Route path='/totalitem/:category' element={<TotalRanking />}></Route>
                        <Route path='/detailinfo/:idx' element={<Detailinfo />}></Route>
                    </Routes>
                </div>


            </BrowserRouter>
        </Provider>
    );
}



export default App;
