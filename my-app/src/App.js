import './App.css';

// spa
import { Route, Routes } from "react-router-dom";
import routes from './routes';
import Layout from './Layout/Layout';

function App() {
  return (
      <div>
        <Layout>
          <Routes>
            {
              routes.map((route) => <Route key={route.path} {...route} />)
            }
          </Routes>
        </Layout>
      </div>
      
  );
}

export default App;
