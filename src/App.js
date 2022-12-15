import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Header />
          <RouterConfig />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
