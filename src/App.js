import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import HotelListPage from "./pages/HotelList/HotelListPage";
import SingleHotelPage from "./pages/SingleHotel/SingleHotelPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel-list" element={<HotelListPage />} />
        <Route path="/single-hotel-view/:id" element={<SingleHotelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
