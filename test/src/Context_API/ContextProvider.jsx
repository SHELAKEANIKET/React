import React, { createContext, useState } from "react";

//? create a context and export it.
export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return(
  <UserContext.Provider value={{ user, setUser }}>
    {children}
  </UserContext.Provider>
  )
}

export default ContextProvider;
