import './App.css';

import CartDisplay from './components/cartDisplay/CartDisplay';
import Menu from './components/menu/Menu';
import { CartProvider } from './context/CartContext';

function App() {
  return (  
      <CartProvider>
      <div className="container-cards">
        <img src="/images/bg__top-right.svg"  className="top-r-bg" alt="bg-top-right"></img>
        {/* <img src="/images/bg__btm-right.svg"  className="bottom-r-bg" alt="bg-top-right"></img> */}
        <img src="/images/bg__left.svg"  className="top-l-bg" alt="bg-top-right"></img>
        <Menu />
        <CartDisplay />
      </div>
      </CartProvider>
  );
}

export default App;
