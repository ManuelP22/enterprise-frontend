import React from 'react';

import { Header, About, Ourservices, Features, Footer } from "./containers";
import { Navbar, CTA } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <div className="bg">
          <Navbar />
          <Header />
        </div>
          <About />
          <Ourservices />
          <Features />
          <CTA />
          <Footer />
    </div>
  )
}

export default App