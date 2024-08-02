
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './page/Test';
import Detailinfo from './page/detailinfo/Detailinfo';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route path='/' element={<FrontBoard />}></Route> */}
                    <Route path='/Test' element={<Test />}></Route>
                    <Route path='/Detailinfo' element={<Detailinfo />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
