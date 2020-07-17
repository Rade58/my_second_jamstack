import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const RouteLogin = (props) => {
  // EVO IZ PROPSA IZDVAJAM showWidget
  const { showWidget } = props;

  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      {/* KACIM GA NA BUTTON */}
      <button onClick={showWidget}>Log In</button>
    </>
  );
};

export default RouteLogin;
