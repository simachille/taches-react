import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";
import Tasks from "./components/tasks/tasks";
import { tasks_data } from "./util/tasks";
function App() {
  return (
    <section className="app-wrapper">
      <Header />
      <main className="container-fluid">
        <Tasks tasks={tasks_data} />
      </main>
      <Footer />
    </section>
  );
}
export default App;
