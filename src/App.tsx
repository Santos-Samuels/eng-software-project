import AppRoutes from "@routes/app.routes";
import { ThemeProvider } from "styled-components";
import UserProvider from "./context/userContext";
import { theme } from "./shared/global/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
