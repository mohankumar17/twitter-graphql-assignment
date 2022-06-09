exports.Query = {
  user: (parent, args, { db }) => {
    let id = args.id;

    let resUser = db.usersList.find((eachUser) => {
      return eachUser.id === id;
    });

    return resUser ? resUser : null;
  },

  tweet: (parent, args, { db }) => {
    let id = args.id;

    let resTweet = db.tweetsList.find((eachTweet) => {
      return eachTweet.id === id;
    });

    return resTweet ? resTweet : null;
  },
  tweets: (parent, { filter }, { db }) => {
    if (filter) {
      let limit = filter.limit;
      let resTweets = [];
      let i = 0;
      while (limit > 0) {
        resTweets.push(db.tweetsList[i]);
        i++;
        limit--;
      }
      return resTweets;
    } else {
      return db.tweetsList;
    }
  },
};
