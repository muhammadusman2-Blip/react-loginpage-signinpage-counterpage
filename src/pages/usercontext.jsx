import { createContext, useState } from "react";

export const globaluser = createContext();

function Usercontextt({ children }) {
  const [user, setuser] = useState({
    names: "usman",
    age: 12
  });

  return (
    <globaluser.Provider value={user}>
      {children}
    </globaluser.Provider>
  );
}

export default Usercontextt;