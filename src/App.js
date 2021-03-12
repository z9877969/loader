import { useState } from "react";
import Loader from "./components/Loader/Loader";
import "./App.css";

const App = () => {
  const [timeOut, setTimeOut] = useState(false);

  const handlerTimeout = () => {
    const n = Math.round((Math.random() * 10) / 2) * 500;
    console.log("n :>> ", n);
    setTimeOut(true);
    setTimeout(() => {
      setTimeOut(false);
    }, n);
  };

  return (
    <>
      <button onClick={handlerTimeout}>Click Me</button>
      {timeOut && <Loader />}
    </>
  );
};

export default App;
