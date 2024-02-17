import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Counter />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
