import React from "react";

// This create a context object
// This will give us a component
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;