import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity-widget";

const Layout = ({ children }) => (
  // KADA BOOTS-UJE UP SITE, NETLIFY CE PRONACI OVOG PROVIDER-A, I ISKORISTICE GA KAO CONTEXT ZA LOGIN

  <IdentityContextProvider url="https://mysecondjamstack.netlify.app">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
