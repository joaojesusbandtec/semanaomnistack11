import React from 'react';

export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// export default Header;

// Header dentro de App.js
/* import React, { useState } from 'react';

import Header from './Header';

import Logon from './pages/Logon';

// JSX (JavaScript XML)

function App() {
  const [counter, setCounter] = useState(0); 

  // Array [valor, funcaoDeAtualizacao]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App; */