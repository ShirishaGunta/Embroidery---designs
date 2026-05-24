import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/customer/HomePage";
import CategoriesPage from "../pages/customer/CategoriesPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;