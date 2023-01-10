import "./App.css";
import "./component/component-style.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Moviedetails } from "./component/moviedetails";
import { Home } from "./component/home";
import { Year } from "./component/Year";
import { Trailers } from "./component/TRailers";
import { article } from "./component/articles";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-lg-fluid card-Background">
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<Moviedetails />}></Route>
            <Route path="/year" element={<Year />}></Route>
            <Route path="/trailers" element={<Trailers />}></Route>
            <Route path={`/article/:title`}></Route>
          </Routes>

          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
