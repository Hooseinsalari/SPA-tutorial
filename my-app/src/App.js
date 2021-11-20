import './App.css';

// spa
import { Route, Switch } from "react-router-dom";
import routes from './routes';
import Layout from './Layout/Layout';

function App() {
  return (
      <div>
        <Layout>
          <Switch>
            {
              routes.map((route) => <Route key={route.path} {...route} />)
            }
          </Switch>
        </Layout>
      </div>
      
  );
}

export default App;
