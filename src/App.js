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
import ServiceDetails from "./Pages/Services/ServiceDetails";
import NotFound from "./Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/services/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
