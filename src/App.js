import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import Tasks from "./components/tasks/Tasks";

function App() {
  // Variable
  const welcome = "Bienvenue dans la formation REACT";

  return (
    <section className="app-wrapper">
      <Header />
      <main>
        <Tasks />
      </main>
      <Footer />
    </section>
  );
}
export default App;
