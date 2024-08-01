
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './page/Test';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* <Route path='/' element={<FrontBoard />}></Route> */}
                    <Route path='/' element={<Test />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
