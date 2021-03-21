import { useState, useEffect, useContext } from "react";

export default function usePhotos(user) {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      const followingUserIds = user?.userId;
      setPhotos(null);
    }

    getTimelinePhotos();
  }, [user?.userId]);

  return { photos };
}
