import './App.css';

// spa
import { Route, Switch } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import routes from './routes';

function App() {
  return (
      <div>
        <NavigationBar />
        <Switch>
        {
          routes.map((route) => <Route {...route} />)
        }
        </Switch>
      </div>
      
  );
}

export default App;
