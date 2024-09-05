import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import { AddForm } from './components/AddForm.js';
import { Update } from './components/Update.js';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/update/:id' Component={Update}></Route>
        <Route path='/adduser' Component={AddForm}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
