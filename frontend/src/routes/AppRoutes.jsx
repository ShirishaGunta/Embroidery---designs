import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/customer/HomePage";
import CategoriesPage from "../pages/customer/CategoriesPage";
import CollectionsPage from "../pages/customer/CollectionsPage";
import CartPage from "../pages/customer/CartPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/collections"
          element={<CollectionsPage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;