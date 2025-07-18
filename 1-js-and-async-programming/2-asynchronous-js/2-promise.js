/*
  Challenge 2: Users Who Dislike More Movies Than They Like

  Get a list of users who have rated more movies negatively than positively.

  Use the methods in utils/mocked-api to retrieve user and rating data.
  !Check how many movies each user liked and disliked, then return only those with more dislikes.

  Requirements:
  - Use only Promise static methods (e.g., Promise.all, Promise.then, etc.) to handle the results
  - Only print the user information in the output—no extra text or formatting

 */

const {
  getUsers,
  getLikedMovies,
  getDislikedMovies,
} = require("./utils/mocked-api");

/**
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 */

/**
 * Logs and returns the users who dislike more movies than they like.
 *
 * @returns {Promise<User[]>} A promise that resolves to an array of users who dislike more movies than they like.
 */
const getUsersWithMoreDislikedMoviesThanLikedMovies = () => {
  // Add your code here
  try {
    return Promise.all([
      getUsers(),
      getLikedMovies(),
      getDislikedMovies(),
    ]).then(([users, moviesLikes, moviesDislikes]) => {
      const response = users.filter((user) => {
        const userLikes = moviesLikes.find((like) => like.userId === user.id);
        const userDislikes = moviesDislikes.find(
          (dislike) => dislike.userId === user.id,
        );

        const likeCount = userLikes ? userLikes.movies.length : 0;
        const dislikeCount = userDislikes ? userDislikes.movies.length : 0;

        return dislikeCount > likeCount;
      });

      return response;
    });
  } catch (err) {
    console.log("Error to any Promise", err);
  }
  return [];
};

getUsersWithMoreDislikedMoviesThanLikedMovies().then((users) => {
  console.log("Users with more disliked movies than liked movies:");
  users.forEach((user) => {
    console.log(user);
  });
});
