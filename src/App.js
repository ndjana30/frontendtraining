import './App.css';
import Home from './screens/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);