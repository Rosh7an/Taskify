import { useState } from "react";
import App from "./App";
import { signInWithGooglePopUp } from "./config";

export default function SignIn() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const logUser = async () => {
    try {
      const response = await signInWithGooglePopUp();
      console.log("response", response);
      setUserAuthenticated(!!response.user && !response.user.isAnonymous);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  
  return (
    <>
      {userAuthenticated ? (
        <App />
      ) : (
        <button onClick={logUser}>Sign In with Google</button>
      )}
    </>
  );
}
