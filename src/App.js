import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Results from './pages/pageResults/results'
import Details from './pages/pageDetails/details'
function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/results" component={Results}/>
              <Route path="/details/:id" component={Details}/>
              <Redirect from="/" to="/results" />
            </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
