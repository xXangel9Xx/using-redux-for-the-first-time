import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Results from './pages/pageResults/results'
import Details from './pages/pageDetails/details'
import AppBar from './components/appBar/index';
function App() {
  return (
    <div className="App">
      <AppBar />
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
