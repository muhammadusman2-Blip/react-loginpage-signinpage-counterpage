import { useContext } from "react";
import { globaluser } from "./usercontext";

function Aboutpage(){
    const {names}=useContext(globaluser)
    return(
    <>
    <h1>this is about page</h1>
    <h1>and age is {names}</h1>
    </>
    )
}
export default Aboutpage;