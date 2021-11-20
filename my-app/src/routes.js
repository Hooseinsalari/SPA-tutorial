import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NoteFound from "./Pages/NoteFound";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";

const routes = [
    {path: "/product/:id", component: Product},
    {path: "/profile", component:Profile},
    {path: "/product", component:Products},
    {path:"/about-us", component: AboutUs},
    {path: "/", component: HomePage, exact: true},
    {component: NoteFound}
]

export default routes;