import React, { useEffect } from "react"; // DA KORISTICU I useEffect HOOOK
import { Router } from "@reach/router";
// UVOZIM I navigate IZ GATSBY-JA JER CU TO KORISTITI DA NAPRAVIM LAZNI REDIRECT
// ZASTO JE LAZNI I SAM CE S SE UVERITI KADA BUDES STARTOVAO APP NAKON STO SVE DEFINISEM
import { navigate } from "gatsby";
//
import Layout from "../components/layout";
import Profile from "../components/profile";
import BaseRoute from "../components/route-base";
import SecretRoute from "../components/route-secret";
//

import LoginRoute from "../components/route-login";
// DOLE KAO STO VIDIS, INSIDE JSX, JA SAM OVU KOMPONENTU RENNDER-OVAO ZA PATH    `/dsshboard/login/`
// MEDJUTIM JA ZELIM DA KADA KORISNIK OTVORI BILO STA
//        STO POCINJE SA '/dasboard'        I STO SE ZAVRSAVA SA     "/"  ILI   NICIM
// DA SE TADA USTVARI ODE NA    /dashboard/login     GDE JE RENDERED DAKEL LOGIN KOMPONENTA

const Dashboard = ({ location }) => {
  // ZATO KORISTIM useEffect HOOK,
  // GDE CU DEFINISATI CIM SE OVA KOMPONENTA RENDER-UJE ZA

  useEffect(() => {
    console.log("USE EFFECT");

    // DAKLE MATCH-UJEM ONAJ PATH STA SAM REKAO DA CU MATCH-OVATI
    // I ZATO KORISTIM locatio KOJI JE PROVIDED ZA SVAKI GATSBY PAGE
    // A DASHBOARD JE ZAISTA PAGE
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      // OVO SAM SAMO RADIO SAMO KAO PROVERU
      console.log("/dashboard/login".match(/^\/dashboard\/?$/)); // ==> null
      console.log("/dashboard/secret".match(/^\/dashboard\/?$/)); // ==> null
      console.log("/dashboard/base".match(/^\/dashboard\/?$/)); // ==> null
      console.log("/dashboard/".match(/^\/dashboard\/?$/)); // ==> USPESAN MATCH
      console.log("/dashboard".match(/^\/dashboard\/?$/)); // ==> USPESAN MATCH

      // EVO OVDE TAKORECI PRAVIM REDIRECT, ODNAONO PRAVIM PROGRAMATICVALLY NAVIGATING DE LOGIN ROUTE-A
      navigate("/dashboard/login", { replace: true });

      // ALI STA OVDE PREDSTAVLAJ replace  OPCIJA ?

      // PA TO CE USTVARI UPDATE=-OVATU HISTORY
      // ROUTERA
      // DA NISAM TO IMAO I DA SAM NAKON NAVIGATTINGA, ZELEO DA SE VRATIM NAZAD
      // PRITISAK NA `<==`  NE BI ME VRATUIO NA PREDHODNI PAGE
    }
  });

  return (
    <Layout>
      <Profile />
      <Router>
        <BaseRoute path="/dashboard/base" />
        <SecretRoute path="/dashboard/secret" />
        <LoginRoute path="/dashboard/login" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
