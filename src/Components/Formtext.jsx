import React, { useState } from "react";

export default function Formtext(props) {
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
    window.speechSynthesis.speak(newText);
  };

  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
  });

  const [btnText, setBtnText]=useState("Enable Dark Mode");

  const modeChange = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        borderRadius: "5px",
      });
      setBtnText("Enable Dark Mode")
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#00001a",
        borderRadius: "5px",
      });
      setBtnText("Enable Light Mode")
    }
  };

  return (
    <>
      <div className="container my-3 p-3" style={myStyle}>
        <button
          className="container btn btn-light my-2 d-grid"
          onClick={modeChange}
        >
          {btnText}
        </button>
        <h1 className="my-3">{props.heading}</h1>
        <div className="my-3">
          <textarea
            style={myStyle}
            className="form-control"
            id="formbox"
            value={text}
            rows="8"
            placeholder="EnTer YoUr TeXt"
            onChange={handleOnChange}
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
            Your content has <b>{text.split(" ").length}</b> words and{" "}
            <b>{text.length}</b> characters
          </p>
          <p>
            Takes{" "}
            <b>
              <u>{0.008 * text.split(" ").length}</u>
            </b>{" "}
            minutes of reading
          </p>
          <h2>Preview Text 👇</h2>
          <p>
            <i>{text.length>0?text:"Enter some text in Textbox to preview it here"}</i>
          </p>
        </div>
      </div>
    </>
  );
}
