import React from "react";
import { useState, useRef } from "react";

const UseRef = () => {
  // Contoh yang tidak boleg digunakan, karena useRef itu sifatnya tidak me re-render

  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // const handleIncrement = () => {
  //   setCount((count) => count + 1);
  //   countRef.current++;

  //   console.log("state : ", count);
  //   console.log("useRef : ", countRef.current);
  // };
  // const handleDecrement = () => {
  //   setCount((count) => count - 1);
  // };
  // return (
  //   <div className="container">
  //     <div className="hooks">useRef</div>
  //     <div className="content">
  //       <button onClick={handleDecrement}>decrement</button>
  //       <div>{countRef.current}</div>
  //       <button onClick={handleIncrement}>increment</button>
  //     </div>
  //   </div>
  // );

  


  // Contoh pemakaian useRef

  const inputRef = useRef(null)
  const focus = () => {
    inputRef.current.focus()
  }

  return(
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focus}>focus ke input</button>
    </>
  )
};

export default UseRef;
