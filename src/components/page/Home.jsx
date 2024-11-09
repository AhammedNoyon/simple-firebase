import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="my-24">
      {/* <button onClick={handleGoogleSignIn} className="btn btn-secondary">
        Login with google
      </button>
      <button onClick={handleSingOut} className="btn btn-secondary">
        Sign Out
      </button> */}
      {user ? (
        <button onClick={handleSingOut} className="btn btn-secondary">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-secondary">
          Login with google
        </button>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>
            <small>email: {user.email}</small>
          </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Home;
