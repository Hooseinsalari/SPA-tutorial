import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NoteFound from "./Pages/NoteFound";

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path:"/about-us", component: AboutUs},
    {component: NoteFound}
]

export default routes;