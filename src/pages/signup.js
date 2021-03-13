import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import { isUsernameAvailable } from "../services/firebase";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid =
    username === "" ||
    fullname === "" ||
    emailAddress === "" ||
    password === "" ||
    password.length < 8;

  const handleSignUp = async (event) => {
    event.preventDefault();
    const usernameAvailable = await isUsernameAvailable(username);

    if (usernameAvailable) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // creating new user.
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: username.toLowerCase(),
          fullname,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setError("Oops! That username is already taken, please try another.");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex md:w-2/4 w-0">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram"
        />
      </div>
      <div className="flex flex-col md:w-2/4 w-full max-w-md">
        <div className="flex flex-col items-center bg-white py-20 px-6 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              value={username}
              placeholder="Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              value={fullname}
              placeholder="Full Name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullname(target.value)}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              value={emailAddress}
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <input
              aria-label="Enter your password"
              type="password"
              value={password}
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-9 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
