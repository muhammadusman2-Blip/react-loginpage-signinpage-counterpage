import React from "react";
// import Usercontext from "./pages/usercontext";
import Approuter from "./router/Router";
import Usercontextt from "./pages/usercontext";
// import Auth from "./pages/Auth";
// import Signin from "./component/signin";

function App() {
  const product=[{
    price:99999,
    names:"iphone 105 Max",
    quantity:0,
  },
  {
    price:99999,
    names:"Radme note 105 Max",
    quantity:0,
  }
]
  return (
    <Usercontextt>/
      <Approuter />
    </Usercontextt>
   
   
  );
}

export default App;