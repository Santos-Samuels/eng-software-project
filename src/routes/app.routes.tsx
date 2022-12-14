import {
  AccountPage,
  CartPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProductPage,
  ProductsPage,
  RegisterPage,
  CreateProductPage,
} from "@src/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./private.routes";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/add-product" element={<CreateProductPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
