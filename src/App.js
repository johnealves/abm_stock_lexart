import { Switch, Route } from 'react-router-dom';
import Home from './Page/Home';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
    </Switch>
  );
}

export default App;
