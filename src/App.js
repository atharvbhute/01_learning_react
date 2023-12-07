import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)

  function minus(){
    setCount(count-1)
  }
  function plus(){
    setTimeout(()=>{console.log("plus1");setCount(count => count +1 )},1000)
    setTimeout(()=>{console.log("plus1");setCount(count => count +1 )},2000)
    setTimeout(()=>{console.log("plus1");setCount(count => count +1 )},3000)
  }

  return (
    <>
    <button onClick={minus}> - </button>
    <h1> {count} </h1>
    <button onClick={plus}> + </button>
    </>
    
  );
}

export default App;
