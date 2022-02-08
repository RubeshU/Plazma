import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/index';
import LiveRequestsPage from "./Pages/LiveRequestsPage";
import DonorPage from "./Pages/DonorPage";
import ReceptorPage from "./Pages/ReceptorPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Navigationbar from "./Components/NavigationBar";
import BloodDetailCard from "./Pages/HomePage/components/BloodDetailCard";
import { BloodList } from "./Data/BloodInfo";

function App() {
  return <>
  <BrowserRouter>
  <Navigationbar />
    <Routes>
      <Route path="/" element={<HomePage />}>
        {BloodList.map((item,index) => (
        <Route key={BloodList[index].type} path={BloodList[index].path} element={<BloodDetailCard key={BloodList[index].type} data={BloodList[index]} />}>
        </Route>
      ))}
      </Route>             
      <Route path="live-requests" element={<LiveRequestsPage />} />
      <Route path="donor" element={<DonorPage />} />
      <Route path="receptor" element={<ReceptorPage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
