import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {GlobalCss} from './styles.ts';
import Products from '../src/pages/Products/index.tsx';
import Home from '../src/pages/Home/index.tsx';

function App() {
  return (
    <>
      <GlobalCss />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;