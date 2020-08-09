import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddArtist } from './components/AddArtist';
import { EditArtist } from './components/EditArtist';
import { GlobalProvider } from './store/GlobalState';
import NavbarLinks from './components/NavbarLinks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
        <NavbarLinks />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddArtist} />
            <Route path="/edit/:id" component={EditArtist} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
