import { useReducer, useEffect } from "react";
import PropTypes from "prop-types";

export default function Profile({ user }) {
  return (
      <div>
          <p>{user.username}</p>
      </div>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};
