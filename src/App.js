import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage'
import Postview from './Components/Postview'
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Postview" element={<Postview />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>

      {/* <LandingPage />
      <Postview /> */}
    </div>
  );
}

export default App;

//npx json-server --watch Mock-data/data.json --port 3004