import './App.css';
import Home from './components/Home/Home';
import Netflix from './components/Netflix/Netflix';
import {Switch, Route} from 'react-router-dom';
import Log from './components/Log/Log';
import Error from './components/Error/Error';
import Sign from './components/Sign/Sign';
import Hotstar from './components/Hotstar/Hotstar';
import Prime from './components/Prime/Prime';
import Contact from './components/Contact/Contact';
import MarvelMovie from './components/MarvelMovie/MarvelMovie';
import MarvelShow from './components/MarvelShow/MarvelShow';

function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/netflix" component={Netflix} />
        <Route path="/prime" component={Prime} />
        {/* <Route path='/contact' component={Contact} /> */}
        <Route  path="/login" component={Log} />
        <Route  path="/sign" component={Sign} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/hotstar" component={Hotstar} />
        <Route  path="/marvelmovie" component={MarvelMovie} />
        <Route  path="/marvelshow" component={MarvelShow} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
