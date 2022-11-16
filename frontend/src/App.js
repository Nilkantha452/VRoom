import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <switch>
        <Route path ="/" exact>
          <Home/>
        </Route>
        <Route path ="/Register">
          <Register/>
        </Route>
      </switch>
    </BrowserRouter>
  );
}

export default App;
