import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import ProductsPage from "./pages/ProductsPage";
import MemorialPage from "./pages/MemorialPage";
import SignIn from "./pages/SignIn";
import PricingPage from "./pages/PriceList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
      
    },
    {
        path: "/article",   
        element: <ArticlePage />,
    },
    {
        path: "/sign_in", 
        element: <SignIn />,
    },
    {
        path: "/pricelist",
        element: <PricingPage />,
    },
    {
        path: "/memorial",
        element: <MemorialPage />,
    },
    {
        path: "/products",   
        element: <ProductsPage />,
    }

])
