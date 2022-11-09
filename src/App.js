import './App.css';
import Categories from './components/Categories';
// import Header from './components/header/header';
// import StoreFront from './components/storefront';
// import SimpleCart from './components/cart/simplecart';

// const [ showCart, setShowCart ] = useState(false);

function App() {
  return (
    <>
      <Categories />
      {/* <div className="App">
      <Header setShowCart={setShowCart} />
      {showCart ? <SimpleCart/> : <StoreFront/>}
    </div> */}
    </>
  );
}

export default App;
