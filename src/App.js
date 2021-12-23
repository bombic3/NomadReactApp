import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi!");
    return () => console.log("Bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

// useEffect에 return하면 CleanUp function이 됨. 둘이 같다
/*
    function Hello() {
      useEffect(() => {
        console.log("Hi!");
        return () => console.log("Bye");
      }, []);
      return <h1>Hello</h1>;
    }
*/
/*
    function Hello() {
      function byFn() {
        console.log("Bye ;(");
      }
      function hiFn() {
        console.log("Hi :)");
        return byFn;
      }
      useEffect(hiFn, []);
      return <h1>Hello</h1>;
    }
*/