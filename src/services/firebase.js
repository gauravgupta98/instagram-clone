import { firebase } from "../lib/firebase";

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

// method which retrieves the user from firebase
// where userId is the logged in user.
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
