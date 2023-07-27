import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleLowclick = () => {
    let newText = text.toLowerCase();
    // console.log("lower clicked");
    setText(newText);
  };

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    // console.log("upper clicked");
    setText(newText);
  };

  const handlereset = () => {
    setText("");
  };

  const speak = () => {
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    newText.voice = speechSynthesis.getVoices().find(voice => voice.name === "Google UK English Female");
    window.speechSynthesis.speak(newText);
  };

  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };


  return (
    <>
      <div className="container my-3 p-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="formbox"
            value={text}
            rows="8"
            placeholder="EnTer YoUr TeXt"
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==="dark"?"#00001a":"white",color:props.mode==="dark"?"white":"black"}}
          ></textarea>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-info" onClick={handleLowclick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-outline-warning" onClick={handleUpclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-outline-success" onClick={handlereset}>
            Clear
          </button>
          <button className="btn btn-outline-success" onClick={speak}>
            Speak
          </button>
        </div>
        <div className="pb-2 my-3">
          <h2>Your Text Summary </h2>
          <p>
            Your content has <b>{text.split(" ").length}</b> words and
            <b>{text.length}</b> characters
          </p>
          <p>
            Takes
            <b>
              <u>{0.008 * text.split(" ").length}</u>
            </b>
            minutes of reading
          </p>
          <h2>Preview Text 👇</h2>
          <p>
            <i>{text.length>0?text:"Enter some text in Textbox to preview it here*"}</i>
          </p>
        </div>
      </div>
    </>
  );
}
