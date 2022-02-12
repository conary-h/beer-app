import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
