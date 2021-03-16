import { useContext } from "react";

import useUser from "../hooks/use-user";
import UserContext from "../context/user";

export default function Sidebar() {
  const { user: loggedInUser } = useContext(UserContext);
  const { user } = useUser(loggedInUser?.uid);

  return <p>I am the side bar</p>;
}
