import React, { useState } from 'react';
import './app.css'

const App = () => {
  const [name, setName] = useState('Ajara');
  return <div className="app">[name]</div>
}

export default App;
