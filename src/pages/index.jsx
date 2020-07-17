import React from "react";
import { Link } from "gatsby";
//
import Layout from "../components/layout";
import "../components/layout.css";
//

const App = () => (
  <Layout>
    <h1>Ovaj app je sjajan.</h1>
    <p>Loguj se da vidis zasto.</p>
    <Link to="/dashboard">Go to dashboard</Link>
  </Layout>
);

export default App;
