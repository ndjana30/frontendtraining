import './App.css';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Pricing from './screens/Pricing';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);