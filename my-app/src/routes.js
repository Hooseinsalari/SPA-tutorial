import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import NoteFound from "./Pages/NoteFound";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";

const routes = [
    {path: "/product/:id", element: <Product />},
    {path: "/profile/*", element: <Profile />},
    {path: "/product", element: <Products />},
    {path:"/about-us", element: <AboutUs />},
    {path: "/", element: <HomePage />},
    {element: <NoteFound />}
]

export default routes;