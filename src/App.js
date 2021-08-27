import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Aboutimage from "./images/Frame 19.png";
import Aboutimage1 from "./images/download.png";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
        <Header />
        <Feature />
        <About image={Aboutimage} title='Comes With All You Need For Daily Life' button='Get The App'  />
        <Presentation />
        <About image={Aboutimage1} title='Download And Get APP Now' button='Download'  />
        <Contact />
    </div>
  );
}

export default App;
