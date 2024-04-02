import React, { createContext, useEffect, useState } from "react";
import { getLocalStorageValueForKey } from "../utils/localStorage.jsx";
import { getUser } from "./GlobalContext.jsx"
import { SnakeToCamel } from "../utils/generalFunctions.jsx"

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async () => {
    try {
      const currentUser = getLocalStorageValueForKey("userId");
      if (currentUser) {
        getUser(currentUser).then((result) => {
          const camelCaseObject = SnakeToCamel(result);
          const userData = camelCaseObject;
          if (userData) {
            setUser(userData[0]);
          } else {
            setUser(null);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
