import AppRoutes from "@routes/app.routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
