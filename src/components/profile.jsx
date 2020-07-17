import React from "react";
import { Link } from "gatsby";

// I JA SAM ZABORAVI DA MOGU NA LINKOVIMA DA KORISTIM activeClassName PROP
// TAKO MOGU ZADATI CSS KLASU I STILIZOVATI ONAJ LINK NAS CIJEM SAM TRENUTNOM ROUTE-U

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link activeClassName="active" to="/dashboard/secret">
          Secret Stuff
        </Link>
        <Link activeClassName="active" to="/dashboard/base">
          Se Your Base
        </Link>
      </nav>
      <span>{"todo: show login status"}</span>
    </div>
  );
};

export default Profile;
