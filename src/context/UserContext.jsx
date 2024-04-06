import React, { createContext, useEffect, useState } from "react";
import { getLocalStorageValueForKey } from "../utils/localStorage.jsx";
import { getUser } from "./GlobalContext.jsx";
import { SnakeToCamel } from "../utils/generalFunctions.jsx";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateUser = async () => {
    try {
      setLoading(true); // Set loading state while fetching user data
      const currentUser = getLocalStorageValueForKey("userId");
      if (currentUser) {
        getUser(currentUser)
          .then((result) => {
            const camelCaseObject = SnakeToCamel(result);
            const userData = camelCaseObject;
            if (userData) {
              setUser(userData);
            } else {
              setUser(null);
            }
            setLoading(false); // Set loading state to false after fetching user data
          })
          .catch((error) => {
            setError(error);
            setLoading(false); // Set loading state to false if there's an error
          });
      } else {
        setLoading(false); // Set loading state to false if no user data found
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false); // Set loading state to false if there's an error
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
