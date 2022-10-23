import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/HeaderAndFooter/Header";
import Footer from "./components/HeaderAndFooter/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
