const faker = require('faker');
const db = require('../config/connection');
const { Question, User } = require('../models');

db.once('open', async () => {
  await Question.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 20; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create questions (memes)
let createdQuestions = [];

  for (let i = 0; i < 14; i += 1) {
    const questionText = (Math.floor(Math.random() * 14) + 1);

    // const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    // const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdQuestion = await Question.create({ questionText });

    // const updatedUser = await User.updateOne(
    //   { _id: userId },
    //   { $push: { thoughts: createdThought._id } }
    // );

    createdQuestions.push(createdQuestion);
  }

  console.log('all done!');
  process.exit(0);
});
