import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './views/MainPage'; // Import MainPage component
import About from './views/About';
import Cart from './views/Cart';
import Login from './views/Login';
import Admin from './views/Admin';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={MainPage} /> {/* Use MainPage component */}
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;