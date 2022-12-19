import './App.css';
import Navbar from './components/NavBar';
import AppRouter from './router/AppRouter.jsx';

function App() {
  return (
    <div className="App">
    <Navbar />
      <AppRouter />
      </div>
  );
}
  
export default App;
   