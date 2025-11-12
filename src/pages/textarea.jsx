import { useState } from "react";

function Textarea(){
    const  [test, setTest] = useState("")
    function handleclick(){
        
            console.log("upper case"  + test)
            const newtext=test.toUpperCase()
            setTest(newtext)
        
    }
    const handleinput=(event)=>{
        
     setTest(event.target.value)
    }
    const handleclear=()=>{
        const cleartext=""
        setTest(cleartext)
    } 

    return(
        <>
,<div className="container">   
        <h1>Enter you text analyze below</h1>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
<textarea class="form-control" id="exampleFormControlTextarea1" value={test} onChange={handleinput} rows="8" placeholder="enter you text"></textarea>
</div>
<button className="test-button" onClick={handleclick} type="button" class="btn btn-primary">Convert to uppercase</button>
<button className="test-button" onClick={handleclear} type="button" class="btn btn-danger">Clear text</button>
<p>{test.split(" ").length} word  {test.length}character</p>
<p>{0.008*test.split(" ").length}Second read</p>
<h2>preview</h2>
<p>{test}</p>
</div>   
        </>
    )
}
export default Textarea;