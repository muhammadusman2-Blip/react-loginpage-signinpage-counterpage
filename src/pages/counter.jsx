import { useParams } from "react-router-dom";

import React, { useReducer } from "react";

   const initailValue={
    count:0,
    count2:5,
   };
   const reducer=(state,action)=>{
    switch (action.type) {
        case "increment":
            return {...state,count: state.count+1};
           case "decrement":
            return {...state,count: state.count-1};
            case "increment2":
            return {...state,count2: state.count2+5};
           case "decrement2":
            return {...state,count2: state.count2-5};
            case "reset":
                return initailValue;
            default:
            return state; 
       
    }
   }
   
    const counterstyle = {
  textAlign: "center",       
  width: "400px",
  height: "400px",           
  border: "2px solid white",
  margin: "50px auto", 
//   backgroundColor:"blue",
  borderRadius:"19px"
};
const counterbuttton={
    margin:"10px",
    padding:"10px",
    borderRadius:"10px",
    backgroundColor:"blue",
    color:"white"
}
const counterparent={
  backgroundImage: 'url("https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2788.jpg?semt=ais_hybrid&w=740&q=80")',
  backgroundSize: 'cover',
  backgroundPosition: 'center', 
  backgroundRepeat:"no-repeat" ,
    height:"100vh",
    width:"100wv",
     display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
   

function Counter(){
    const [count,dispatch]=useReducer(reducer,initailValue)
     const {myName}=useParams()
    return(
        <div style={counterparent}>
     <div style={counterstyle}>
        <h1>{myName}</h1>
     <h1 style={{color:'white'}}>{count.count}</h1>
     <h1 style={{color:'white'}}>{count.count2}</h1>
     <button style={(counterbuttton)} onClick={()=>dispatch({type:"increment"})}>increment</button>
     <button style={counterbuttton} onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
     <button style={(counterbuttton)} onClick={()=>dispatch({type:"increment2"})}>increment count 2</button>
     <button style={counterbuttton} onClick={()=>dispatch({type:"decrement2"})}>Decrement count 2</button>
     <button style={{  margin:"10px",padding:"10px",borderRadius:"10px",backgroundColor:"red",color:"white"}} onClick={()=>dispatch({type:"reset"})}>reset</button>
     </div>
     </div>
    )

    
}
export default Counter;