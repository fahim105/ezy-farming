import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import CropDisease from "./components/Pages/CropDisease/CropDisease";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import Register from "./components/Pages/Auth/Register";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Pages/Auth/Login";
import Dashboard from "./components/Pages/User/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./components/Pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./components/Pages/Admin/AdminDashboard";
import CreateCategory from "./components/Pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./components/Pages/Admin/CreateProduct/CreateProduct";
import Users from "./components/Pages/Admin/Users/Users";
import Orders from "./components/Pages/User/Orders/Orders";
import Profile from "./components/Pages/User/Profile/Profile";
import Products from "./components/Pages/Admin/Products/Products";
import UpdateProduct from "./components/Pages/Admin/UpdateProduct/UpdateProduct";
import SearchResult from "./components/Pages/SearchResult/SearchResult";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";
import CartPage from "./components/Pages/Cart/CartPage";
import AdminOrders from "./components/Pages/Admin/AdminOrders/AdminOrders";
import Tomato from "./components/Pages/CropDisease/Tomato";
import CropLivestock from "./components/Pages/User/CropLivestock/CropLivestock";
import CropLivestockDetails from "./components/Pages/User/CropLivestock/CropLivestockDetails";
import UpdateLivestock from "./components/Pages/User/CropLivestock/UpdateLivestock";
import MarketplaceTwo from "./components/Pages/Marketplace/MarketplaceTwo";
import Weather from "./components/Pages/Weather/Weather";
import ContactTwo from "./components/Pages/Contact/ContactTwo";
import ServicesPage from "./components/Pages/Services/ServicesPage";
import ServicesTwo from "./components/Pages/Services/ServicesTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/marketplace"
          element={<MarketplaceTwo></MarketplaceTwo>}
        ></Route>
        <Route path="/weather" element={<Weather></Weather>}></Route>
        <Route path="/contact" element={<ContactTwo></ContactTwo>}></Route>
        <Route path="/services" element={<ServicesTwo></ServicesTwo>}></Route>
        <Route
          path="/servicepage"
          element={<ServicesPage></ServicesPage>}
        ></Route>
        <Route
          path="/product/:slug"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/search" element={<SearchResult></SearchResult>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>

        {/* dashboard user */}

        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
          <Route path="user/orders" element={<Orders></Orders>}></Route>
          <Route path="user/profiles" element={<Profile></Profile>}></Route>
          <Route
            path="user/crop-livestock"
            element={<CropLivestock></CropLivestock>}
          ></Route>
          <Route
            path="user/crop-livestock/:cid"
            element={<CropLivestockDetails></CropLivestockDetails>}
          ></Route>
          <Route
            path="user/crop-livestock/update-livestock/:cid"
            element={<UpdateLivestock></UpdateLivestock>}
          ></Route>
        </Route>

        {/* dashboard admin */}

        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route
            path="admin/create-category"
            element={<CreateCategory></CreateCategory>}
          ></Route>
          <Route
            path="admin/create-product"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path="admin/product/:slug"
            element={<UpdateProduct></UpdateProduct>}
          ></Route>
          <Route path="admin/products" element={<Products></Products>}></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
          <Route
            path="admin/orders"
            element={<AdminOrders></AdminOrders>}
          ></Route>
        </Route>

        {/* admin dashboard end */}

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/cropDisease"
          element={<CropDisease></CropDisease>}
        ></Route>
        <Route path="/tomato" element={<Tomato></Tomato>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
