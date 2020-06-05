import React from "react";

export default function NavBar() {
  return (
    <div>
      <h1>Welcome to my site</h1>
      <nav className="navbar">
        <ul>
          <li className="nBl">
            <a href="https://www.google.com">Main menu</a>
          </li>
          <li className="nBl">
            <a href="https://www.google.com">About me</a>
          </li>
          <li className="nBl">
            <a href="https://www.google.com">Gallery</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
