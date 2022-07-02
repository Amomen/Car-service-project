import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
// import Service from "./Pages/Home/Services/Service";
import Services from "./Pages/Services/ServiceDetails";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import AddService from "./Pages/Add a service/AddService";
import ManageServices from "./Pages/Manage Services/ManageServices";
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/checkout"
                    element={
                        <RequireAuth>
                            <Checkout></Checkout>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/addService"
                    element={
                        <RequireAuth>
                            <AddService></AddService>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/manage"
                    element={
                        <RequireAuth>
                            <ManageServices></ManageServices>
                        </RequireAuth>
                    }
                ></Route>
                {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
