import React from "react";
import { navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

// OVA KOMPONENT, KAO PROP ZAHTEVACE DRUGU KOMPONENTU
// ZASTO SAM RENAME-OVAO, POMENUTI  component DA BUDE   Component
// PA REACT ZAHTEVA DA DA KOMPONENTE POCINJ USA VELIKI MSLOVOM
// A KOMPONENTA SE PROSLEDJUJE KAO PROP, A TO SE RADI MALIM SLOVOM

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // KAO PROP SE USTVARI PROSLEDJUJE KOMPONENTA, KOJU ZELIM DA PROTECT-UJEM
  // TREBA MI I location (---AKO NISAM POMENUO RANIJE, TREBAM RECI DA "SVAKA KOMPONENTA U GATSBY-JU, DOBIJA POMENUTI PROP"---)
  // SVE OSTALO STO SE PROSLEDI NALAZICE SE U rest-U

  const identity = useIdentityContext();

  const isLoggedIn = identity?.isLoggedIn;

  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    // TEORETSKI NE BI TREBALO DA UOPSETE BUDE MOGUCE DA SE OVO MOZE HITOVATI,
    // JER CE SE OVA KOMPONENTA SAM OKORISTITI ZA "/dasboard/secreat" I "/dasboard/base"

    // OVO BI ZNACIL ODA AKO NEKO NIJE LOGGED IN, DA GA NAVIGATE-UJEM NAZAD DO LOGIN PAGE-A

    navigate("/dashboard/login", { replace: true });

    // NE ZELI MDA SE ISTA RENDER-UJE ZATO RETURN-UJEM NISTA

    return null;
  }

  // ALI AKO POSTOJI LOGGED IN KORISNIK, JA CU RETURN-OVATI KOMPONENTU

  return <Component {...rest} />;
};

export default PrivateRoute;
