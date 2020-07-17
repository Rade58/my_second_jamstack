import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";
import BaseRoute from "../components/route-base";
import SecretRoute from "../components/route-secret";
import LoginRoute from "../components/route-login";
import IdentityModal from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";

//
import PrivateRoute from "../components/private-route";
//

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  const [isVisible, setVisibility] = useState(false);

  const showWidget = () => setVisibility(true);
  const hideWidget = () => setVisibility(false);

  //  WRAPP-OVAO SAM BASE I SECRET, U POMENUTU KOMPONENTU
  // I PROSLEDIO ISTE PROPSE, KOJI SU BILI NA 'NORMALNIM' ('NON PRIVATE') KOMPONENTAMA
  // ALI PROSLEDJUJEM I KOMPONENTU, KOJA ZELIM DA BUDE PRIVATE

  return (
    <Layout>
      <Profile showWidget={showWidget} />
      <Router>
        {/* <BaseRoute path="/dashboard/base" />
        <SecretRoute path="/dashboard/secret" /> */}
        <PrivateRoute component={BaseRoute} path="/dashboard/base" />
        <PrivateRoute component={SecretRoute} path="/dasboard/secret" />
        {/*  */}
        <LoginRoute path="/dashboard/login" showWidget={showWidget} />
      </Router>
      <IdentityModal
        aria-label="login dialog"
        showDialog={isVisible}
        onCloseDialog={hideWidget}
      />
    </Layout>
  );
};

export default Dashboard;
