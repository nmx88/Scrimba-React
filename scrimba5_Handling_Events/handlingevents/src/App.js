import React from "react";
import "./App.css";

function handleClick() {
  console.log('You got an infected system buy our Antivirus')
}

function App() {
  return (
    <div>
      <img
        alt="lazy_indian"
        src="https://upload.wikimedia.org/wikipedia/commons/d/d6/One_lazy_eye.jpg" onMouseOver={()=> console.log('pwned!!!')}
      />
      <br/>
      <br/>
      <button onClick={handleClick}>Click Bait</button>
      <br/>
      <br/>
      <img id="akatsuki" alt="red_cloud" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Akatsuki_nuage.svg" onClick={()=> window.open("https://upload.wikimedia.org/wikipedia/commons/f/f8/Akatsuki_%288104743811%29.jpg","_blank")} />
    </div>
  );
}

export default App;
