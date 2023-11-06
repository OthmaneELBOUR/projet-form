import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Formulaire } from './screens/Formulaire';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Formulaire />} />
      </Routes>
    </div>

  );
}

export default App;
