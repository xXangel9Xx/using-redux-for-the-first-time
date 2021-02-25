import './App.css';
import { Provider } from 'react-redux'/*aqui empezamos a usar Redux en react*/
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Results from './pages/pageResults/results'
import Details from './pages/pageDetails/details'
import store from './redux/store';/*aqui se llama al store de redux */
import AppBar from './components/appBar/index';

function App() {
  return (
    <div className="App">
      <AppBar />
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/results" component={Results}/>
              <Route path="/details/:id" component={Details}/>
              <Redirect from="/" to="/results" />
            </Switch>
          </BrowserRouter>
        </Provider>    
    </div>
  );
}

export default App;
