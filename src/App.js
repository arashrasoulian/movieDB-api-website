import "./App.css";
import "./component/component-style.css";
import { useState, useEffect } from "react";
import { Header } from "./component/Header";
import { Card } from "./component/Card";
import { Footer } from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Moviedetails } from "./component/moviedetails";
import { Home } from "./component/home";
import { Year } from "./component/Year";

function App() {
  return (
    <div>
      {/* use tag route here and then navigate to the simple page 
  use path like "/movie" to test this idea. then you can set a diffrent  */}
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Moviedetails />}></Route>
          <Route path="/year" element={<Year />}></Route>
        </Routes>

        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

// // function pictureToArray(){

// // for(let i = 0 ; i<20 ;i++){
// //     setPicture([...pictures,data.results[i].backdrop_path])
// //     array.push(data.results[i].backdrop_path)

// //   }

// // }

// getData()
//  return (
//    <div>
//         <div> my project </div>
//         {/* <button type='submit' onClick={getData()}>getData</button> */}
//         {/* { picture.map((element,index) => {
//          return(

//          <div key={index}>{element}</div>
//          )

//        })
//         } */}
//    </div>

//  );
// }
