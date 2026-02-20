import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Order from "./components/Order";
import ProtectedRoute from "./routes/ProtectRoutes";

const AppLayout = () => {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
