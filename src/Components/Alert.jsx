import React from "react";

export default function Alert(props) {
  const numbers = [3, 5, 7];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled);
  return (
    <>
      <div className="alert alert-info alert-dismissible fade show" role="alert">
        <strong>{props.alert}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}
