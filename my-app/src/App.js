import './App.css';

// spa
import { Route, Routes, Navigate } from "react-router-dom";
import routes from './routes';
import Layout from './Layout/Layout';

function App() {
  return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate replace to="/product" />} />
            {
              routes.map((route) => <Route key={route.path} {...route} />)
            }
          </Routes>
        </Layout>
      </div>
      
  );
}

export default App;
