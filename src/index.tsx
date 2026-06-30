import "styles/reset.css";
import "styles/commonStyles.scss";
import { Routing } from "components/Routing/Routing";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme/theme";

const application = (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </ThemeProvider>
);
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(application);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
