import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
  </Router>
  );
}

export default App;
