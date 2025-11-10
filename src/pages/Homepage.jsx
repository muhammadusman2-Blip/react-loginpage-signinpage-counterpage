import { useContext } from "react";
import { globaluser } from "./usercontext";
import Aboutpage from "./Aboutpage";

function Homepage() {
  const { names, age } = useContext(globaluser);

  return (
    <>
      <h1>This is Homepage</h1>
      <h2>My name is {names} and my age is {age}</h2>
      <Aboutpage />
    </>
  );
}

export default Homepage;