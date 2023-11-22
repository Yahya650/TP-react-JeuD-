import './App.css';
import JeuDe from './components/JeuDe';
function App() {
  return (
    <div className="App">
      <JeuDe numberOfWinner={5}>
       <p>Bravo, vous avez gagné!</p>
      </JeuDe>
    </div>
  );
}

export default App;
