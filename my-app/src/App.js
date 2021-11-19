import './App.css';

// spa
import { Route } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import routes from './routes';

function App() {
  return (
      <div>
        <NavigationBar />
        {
          routes.map((route) => <Route {...route} />)
        }
      </div>
  );
}

export default App;
