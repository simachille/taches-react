import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";
import Tasks from "./components/tasks/tasks";

function App() {
  // Variable
  const welcome = "Bienvenue dans la formation REACT";

  return (
    <section className="app-wrapper">
      <Header />
      <main className="container">
        <Tasks />
      </main>
      <Footer />
    </section>
  );
}
export default App;
