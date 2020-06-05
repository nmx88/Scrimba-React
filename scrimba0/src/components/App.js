import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import "./App.css";
import TimeOfDay from "./TimeOfDayApp";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <MainContent />

      <input type="checkbox" />
      <p>Placeholder text here</p>

      <input type="checkbox" />
      <p>Placeholder text here</p>

      <input type="checkbox" />
      <p>Placeholder text here</p>

      <input type="checkbox" />
      <p>Placeholder text here</p>
      <TimeOfDay />
      <Footer />
    </div>
  );
}
