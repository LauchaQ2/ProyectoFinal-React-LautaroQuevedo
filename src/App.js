import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/AppRouter/AppRouter';
import {ThemeProvider} from './context/ThemeContext';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <div className="App">
    <CartProvider>
    <ThemeProvider>
      <AppRouter/>
      </ThemeProvider>
    </CartProvider>
    </div>
  );
}

export default App;
