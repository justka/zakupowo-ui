import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "styles/reset.css";
import "styles/commonStyles.scss";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "components/Routing/Routing";

const application = (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
const rootElement = document.getElementById("root");

ReactDOM.render(application, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
