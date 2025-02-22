import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ResetButton from './components/ResetButton'

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={() => incrementCount} />
      <Button onClick={() => incrementCount} />
      <Button onClick={() => incrementCount} />
      <Button onClick={() => incrementCount} />
      <ResetButton count={count} setCount={setCount} buttonStyle={buttonStyle} />
    </div>
  );
}

export default App;
