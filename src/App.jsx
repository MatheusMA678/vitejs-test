import { useState } from 'react';
import Header from './components/Header.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
