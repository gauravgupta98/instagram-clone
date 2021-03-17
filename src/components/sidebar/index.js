import { useContext } from "react";

import useUser from "../../hooks/use-user";
import UserContext from "../../context/user";
import User from "./user";
import Suggestions from "./suggestions";

export default function Sidebar() {
  const { user: loggedInUser } = useContext(UserContext);
  const {
    user: { fullName, username, userId },
  } = useUser(loggedInUser?.uid);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
