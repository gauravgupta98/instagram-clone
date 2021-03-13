import { firebase, FieldValue } from "../lib/firebase";

// method which checks if username already exists.
// returns false if already exist, else false.
export async function isUsernameAvailable(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.length === 0;
}
