export function seedDatabase(firebase) {
  const users = [
    {
      userId: "yFyFGEL5W5Z2zknuymFXp5U55vR2",
      username: "gg",
      fullName: "Gaurav Gupta",
      emailAddress: "gg@gmail.com",
      following: ["266Zatj6i9SWzQLR3Z9k0RJQV753"],
      followers: [
        "266Zatj6i9SWzQLR3Z9k0RJQV753",
        "ReRhUPUfqrhO74fTP9K7jTbGkZf2",
        "r9ss9CtMsCVG1MuJLkocetiLdsN2",
      ],
      dateCreated: Date.now(),
    },
    {
      userId: "266Zatj6i9SWzQLR3Z9k0RJQV753",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["yFyFGEL5W5Z2zknuymFXp5U55vR2"],
      dateCreated: Date.now(),
    },
    {
      userId: "ReRhUPUfqrhO74fTP9K7jTbGkZf2",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["yFyFGEL5W5Z2zknuymFXp5U55vR2"],
      dateCreated: Date.now(),
    },
    {
      userId: "r9ss9CtMsCVG1MuJLkocetiLdsN2",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["yFyFGEL5W5Z2zknuymFXp5U55vR2"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "266Zatj6i9SWzQLR3Z9k0RJQV753",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
