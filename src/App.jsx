import React from "react";

/* layouts */
import NavBar from "./layout/NavBar";
import Hero from "./layout/Hero";
import Main from "./layout/Main";
import Footer from "./layout/footer";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <Main></Main>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
