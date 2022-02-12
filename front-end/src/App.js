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
import LoginPage from "./Pages/HomePage/components/LoginPage";
import RegisterPage from "./Pages/HomePage/components/RegisterPage";
import ReceptorRequestForm from "./Pages/ReceptorPage/ReceptorPageComponents/ReceptorRequestForm";
import CheckRequestStatus from "./Pages/ReceptorPage/ReceptorPageComponents/CheckRequestStatus";
import YourProfile from "./Pages/DonorPage/DonorPageComponents/YourProfile";
import CurrentDonation from "./Pages/DonorPage/DonorPageComponents/CurrentDonation";
import DonationHistory from "./Pages/DonorPage/DonorPageComponents/DonationHistory";
import Footer from "./Pages/HomePage/components/Footer";

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
      <Route path="login" element={<LoginPage />} />  
      <Route path="register" element={<RegisterPage />} />
      <Route path="live-requests" element={<LiveRequestsPage />} />
      <Route path="donor" element={<DonorPage />}>
        <Route path="" element={<div />} />
        <Route path="your-profile" element={<YourProfile />} />
        <Route path="current-donation" element={<CurrentDonation />} />
        <Route path="donation-history" element={<DonationHistory />} />
      </Route>
      <Route path="receptor" element={<ReceptorPage />}>

        <Route path="" element={<div />} />
        <Route path="request" element={<ReceptorRequestForm />} />
        <Route path="status" element={<CheckRequestStatus />} />
      </Route>
      <Route path="contact-us" element={<ContactUsPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </>;
}

export default App;
