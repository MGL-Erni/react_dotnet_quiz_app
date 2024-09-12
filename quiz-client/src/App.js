import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <div className='background'></div>
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='/' element={<Layout />}>
              <Route path="/quiz" element={<Quiz/>} />
              <Route path="/result" element={<Result/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
