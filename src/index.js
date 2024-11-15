import "./scss/index.scss";
import ReactDOM from 'react-dom/client';
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);