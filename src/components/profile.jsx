import React from "react";
import { Link } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

// EVO IZ PROPS-A IZDVAJAM    showWidget
const Profile = ({ showWidget }) => {
  const identity = useIdentityContext();

  console.log(identity);

  const isLoggedIn = identity && identity.isLoggedIn;

  const name = identity?.user?.user_metadata?.full_name;

  //  KACIM POMENUTU FUNKCIJU NA BUTTON, KOJI CU DEFINISATI

  return (
    isLoggedIn && (
      <div className="dashboard-header">
        <nav>
          <Link activeClassName="active" to="/dashboard/secret">
            Secret Stuff
          </Link>
          <Link activeClassName="active" to="/dashboard/base">
            Se Your Base
          </Link>
        </nav>
        <span>
          Logged in as {name}
          {/* EVO OVDE */}
          <button onClick={showWidget}>Log out</button>
        </span>
      </div>
    )
  );
};

export default Profile;
