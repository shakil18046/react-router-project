import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Review from "./Component/Reviews/Review";
import Dashboard from "./Component/Dashboard/Dashboard";
import Blogs from "./Component/Blogs/Blogs";
import About from "./Component/About/About";
import Notfound from "./Component/NotFound/Notfound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Reviews" element={<Review></Review>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
