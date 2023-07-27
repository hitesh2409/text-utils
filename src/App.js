// import Formtext from "./Components/Formtext";
import { useState } from "react";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {

  const[mode,setMode]=useState("light");
  // const[alert,setAlert]=useState("light");

  const toggleMode = () => {
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="#00001a";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
      <Navbar title="TextUtils by" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is alert"/>
      {/* <Formtext heading="Enter the text to be converted"/> */}
      <TextForm heading="Enter the text to be converted" mode={mode}/>
    </>
  );
}

export default App;
