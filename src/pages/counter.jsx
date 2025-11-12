import { useParams } from "react-router-dom";
import React, { useReducer } from "react";

// Corrected initial value spelling
const initialValue = {
  count: 0,
  count2: 5,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "increment2":
      return { ...state, count2: state.count2 + 5 };
    case "decrement2":
      return { ...state, count2: state.count2 - 5 };
    case "reset":
      return initialValue; // fixed spelling
    default:
      return state;
  }
};

// Styles
const counterstyle = {
  textAlign: "center",
  width: "400px",
  height: "400px",
  border: "2px solid white",
  margin: "50px auto",
  borderRadius: "19px",
};

const counterbutton = {
  margin: "10px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "blue",
  color: "white",
};

const counterparent = {
  backgroundImage:
    'url("https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2788.jpg?semt=ais_hybrid&w=740&q=80")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw", // fixed typo
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Counter component
function Counter() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const { myName } = useParams();

  return (
    <div style={counterparent}>
      <div style={counterstyle}>
        <h1>{myName}</h1>
        <h1 style={{ color: "white" }}>{count.count}</h1>
        <h1 style={{ color: "white" }}>{count.count2}</h1>

        <button
          style={counterbutton}
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          style={counterbutton}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          style={counterbutton}
          onClick={() => dispatch({ type: "increment2" })}
        >
          Increment Count 2
        </button>
        <button
          style={counterbutton}
          onClick={() => dispatch({ type: "decrement2" })}
        >
          Decrement Count 2
        </button>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;