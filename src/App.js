import { Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";


function App(){
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/features" Component={Features} />
        <Route path="/pricing" Component={Pricing} />
      </Routes>
    </div>
  );
}

