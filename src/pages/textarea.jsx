import { useState } from "react";

function Textarea() {
  const [test, setTest] = useState("");

  function handleclick() {
    const newtext = test.toUpperCase();
    setTest(newtext);
  }

  const handleinput = (event) => {
    setTest(event.target.value);
  };

  const handleclear = () => {
    setTest("");
  };

  return (
    <>
      <div className="container">
        <h1>Enter your text to analyze below</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={test}
            onChange={handleinput}
            rows="8"
            placeholder="Enter your text"
          ></textarea>
        </div>
        <button
          className="test-button btn btn-primary"
          onClick={handleclick}
          type="button"
        >
          Convert to uppercase
        </button>
        <button
          className="test-button btn btn-danger"
          onClick={handleclear}
          type="button"
        >
          Clear text
        </button>
<p>
  {test.trim() === "" ? 0 : test.trim().split(/\s+/).length} words, {test.length} characters
</p>
<p>
  {0.008 * (test.trim() === "" ? 0 : test.trim().split(/\s+/).length)} Seconds read
</p>
<h2>Preview</h2>
<p>{test}</p>
</div>   
        </>
    )
}
export default Textarea;