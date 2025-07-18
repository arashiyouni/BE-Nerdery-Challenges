/*

  Challenge 3: Most Common Subscription for Harsh Reviewers

  Find the most common subscription among users who dislike more movies than they like.
  Use the methods in utils/mocked-api to get user and rating data.
  Check each user's likes vs. dislikes, filter those with more dislikes, and return the most frequent subscription.

  Requesites:
    - Use await with the methods from utils/mocked-api to get the data
    - Make sure to return a string containing the name of the most common subscription
*/

const {
  getUsers,
  getLikedMovies,
  getDislikedMovies,
  getUserSubscriptionByUserId,
} = require("./utils/mocked-api");

/**
 * Logs the most common subscription among users
 * who disliked more movies than they liked.
 *
 * @returns {Promise<string>} Logs the subscription name as a string.
 */
const getCommonDislikedSubscription = async () => {
  // Add your code here
  const users = await getUsers();
  const likedMovies = await getLikedMovies();
  const dislikedMovies = await getDislikedMovies();
  const harshUsers = [];

  for (const user of users) {
    const userLikes = likedMovies.find((like) => like.userId === user.id);
    const userDislikes = dislikedMovies.find(
      (dislike) => dislike.userId === user.id,
    );

    const likeCount = userLikes ? userLikes.movies.length : 0;
    const dislikeCount = userDislikes ? userDislikes.movies.length : 0;

    if (dislikeCount > likeCount) {
      harshUsers.push(user);
    }
  }

  const subscriptions = await Promise.all(
    harshUsers.map((user) => getUserSubscriptionByUserId(user.id)),
  );

  const countMap = {};
  for (const sub of subscriptions) {
    const name = sub.subscription;
    countMap[name] = (countMap[name] || 0) + 1;
  }

  let mostCommon = "";
  let max = 0;
  for (const [name, count] of Object.entries(countMap)) {
    if (count > max) {
      max = count;
      mostCommon = name;
    }
  }

  return mostCommon;
};

getCommonDislikedSubscription().then((subscription) => {
  console.log("Common more dislike subscription is:", subscription);
});
