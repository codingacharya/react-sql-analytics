import React from 'react';
import SignupChart from './components/SignupChart';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>📊 Analytics Dashboard</h1>
      <SignupChart />
    </div>
  );
}

export default App;
