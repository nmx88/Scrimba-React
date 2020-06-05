import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor"

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
 
  function increment() {
    setCount(prevCount => prevCount +1 )
  }

  function decrement() {
    setCount(prevCount => prevCount -1 )
  }

  function multiply() {
    setCount(prevCount => prevCount *2 )
  }

  function halve() {
    setCount(prevCount => prevCount /2 )
  }

  function defaultState() {
    setCount(prevCount => prevCount = 0)
  }
  
  useEffect( () => {
    setColor(randomcolor())
    setInterval(()=> {
      console.log('Interval')
    },1000)
  }, [count]) // Array cause it expects other variables
  
  return (
      <>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply}>X</button>
      <button onClick={halve}>Halve</button>
      <button onClick={defaultState}>CE</button>
     
      </>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//       super()
//       this.state = {
//           count: 0
//       }
//   }

//   render() {
//       return (
//           <div>
//               <h1>{this.state.count}</h1>
//               <button>Change!</button>
//           </div>
//       )
//   }
// }


