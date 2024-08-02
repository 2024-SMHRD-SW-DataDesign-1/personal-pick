
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './page/Test';
import Detailinfo from './page/detailinfo/Detailinfo';
import Search from './page/search/Search';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route path='/' element={<FrontBoard />}></Route> */}
                    <Route path='/test' element={<Test />}></Route>
                    <Route path='/detailinfo' element={<Detailinfo />}></Route>
                    <Route path='/search' element={<Search />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
