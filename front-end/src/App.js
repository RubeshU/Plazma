import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/index';
import LiveRequestsPage from "./Pages/LiveRequestsPage";
import DonorPage from "./Pages/DonorPage";
import ReceptorPage from "./Pages/ReceptorPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Navigationbar from "./Components/NavigationBar";

function App() {
  return <>
  <BrowserRouter>
  {/* <NavLink to="donor" style={({ isActive})=> {
    return isActive ? {
      color: "red"
    } : {
      color: "blue"
    }
  }}>DONOR</NavLink>
  <NavLink to="receptor" style={({ isActive})=> {
    return isActive ? {
      color: "red"
    } : {
      color: "blue"
    }
  }}>DONOR</NavLink> */}
  <Navigationbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="live-requests" element={<LiveRequestsPage />} />
      <Route path="donor" element={<DonorPage />} />
      <Route path="receptor" element={<ReceptorPage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
