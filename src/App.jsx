import React from "react";
import {
  Navbar,
  Header,
  About,
  Contact,
  Footer,
  Portfolio,
  Services,
  Testimonials,
  Experience
} from "./components/";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>

    </div>
  );
};

export default App;
