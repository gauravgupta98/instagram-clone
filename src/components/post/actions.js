import { useState, useContext } from "react";
import PropTypes from "prop-types";

import { handleLike } from "../../services/firebase";
import UserContext from "../../context/user";

export default function Actions({
  docId,
  totalLikes,
  likedPhoto,
  handleFocus,
}) {
  const {
    user: { uid: userId },
  } = useContext(UserContext);
  const [hasUserLiked, setHasUserLiked] = useState(likedPhoto);
  const [likes, setLikes] = useState(totalLikes);

  const handleToggleLiked = async () => {
    setHasUserLiked((hasUserLiked) => !hasUserLiked);
    await handleLike(docId, userId, hasUserLiked);
    setLikes((likes) => (hasUserLiked ? likes-- : likes++));
  };

  return <p>actions</p>;
}

Actions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
