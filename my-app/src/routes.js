import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path:"/about-us", component: AboutUs}
]

export default routes;