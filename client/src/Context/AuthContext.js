import React, { createContext, useState, useEffect } from "react";
import AuthAPI from "../utils/AuthAPI";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [conversationID, setConversationID] = useState(null);

  useEffect(() => {
    AuthAPI.isAuthenticated().then((data) => {
      setPhoto(data.photo);
      setId(data.id);
      setUser(data.user);
      setConversationID(data.conversationID);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div
          style={{
            height: "100vh",
            backgroundImage:
              "url(" + process.env.PUBLIC_URL + "/loadingBG.png" + ")",
          }}
        ></div>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            id,
            setId,
            photo,
            setPhoto,
            conversationID,
            setConversationID
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
