import "./App.css";
import "./component/component-style.css";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Moviedetails } from "./pages/moviedetails";
import { Home } from "./pages/home";
import { Year } from "./pages/Year";
import { Trailers } from "./pages/TRailers";
import { ArticleDetails } from "./pages/ArticleDetails";
import { Trailer } from "./pages/Youtube";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid card-Background">
          <header>
            <Header />
          </header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<Moviedetails />}></Route>
            <Route path="/year" element={<Year />}></Route>
            <Route path="/trailers" element={<Trailers />}></Route>
            <Route path="/article/:id" element={<ArticleDetails />}></Route>
            <Route path="/trailers/:id" element={<Trailer />}></Route>
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
