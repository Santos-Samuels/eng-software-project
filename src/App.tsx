import AppRoutes from "@routes/app.routes";
import { ThemeProvider } from "styled-components";
import UserProvider from "./context/userContext";
import { theme } from "./shared/global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
