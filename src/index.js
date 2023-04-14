import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstFile from './FirstFile';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter} from 'react-router-dom';
import SecondFile from './SecondFile';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='navbar'>
    <App/>
    <Routes>
      <Route path='/first' element={<FirstFile/>}></Route>
      <Route path='/second' element={<SecondFile/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
