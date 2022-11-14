import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navigation from './components/shared/Navigation/Navigation';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <switch>
        <Route path ="/" exact>
          <Home/>
        </Route>

        
      </switch>
    </BrowserRouter>

  );
}

export default App;
