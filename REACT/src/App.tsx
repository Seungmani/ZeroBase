import "./assets/css/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Drawer from "./components/common/Drawer";
import Router from "./router/router";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <input type="checkbox" id="side-menu" className="drawer-toggle" />
        <section className="drawer-content">
          <Nav />
          <section className="main pt-16">
            <Router />
          </section>
          <Footer />
        </section>
        <Drawer />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
