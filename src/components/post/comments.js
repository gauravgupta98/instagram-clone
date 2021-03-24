import PropTypes from "prop-types";

export default function Comments({ docId, comments, posted, commentInput }) {
  return <p> comment </p>;
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired,
};
