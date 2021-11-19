import './App.css';

// spa
import { Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
      <div>
        <NavigationBar />
        <Route path="/" exact={true} render={(props) => <HomePage name="hossein" {...props} />} />
        <Route path="/about-us" component={AboutUs} />
      </div>
  );
}

export default App;
