import { useContext } from "react";
import Skeleton from "react-loading-skeleton";

import LoggedInUserContext from "../context/loggedInUser";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        <p> We've got the photos from firebase.</p>
      )}
    </div>
  );
}
