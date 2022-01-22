import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Breakfast from './Pages/Home/Food/Breakfast/Breakfast';
import Dinner from './Pages/Home/Food/Dinner/Dinner';
import Lunch from './Pages/Home/Food/Lunch/Lunch';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Breakfast />} />
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Route>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
