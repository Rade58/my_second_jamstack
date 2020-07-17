import React from "react";
import { Link } from "gatsby";
//
import { IdentityContextProvider } from "react-netlify-identity-widget";
//

const Layout = ({ children }) => (
  // IZABRAO SAM I IME APP-U
  <IdentityContextProvider url="https://mysecondjamstack.netlify.app">
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
