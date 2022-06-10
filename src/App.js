import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {

  return (
    <div>
      <Header/>
      <HomePage city="Delhi" />
    </div>
    
  );
}

export default App;