exports.User = {
  tweets: (parent, args, { db }) => {
    let userId = parent.id;

    let resTweets = db.tweetsList.filter((eachTweet) => {
      return eachTweet.AuthorID === userId;
    });

    //console.log(resTweets);

    return resTweets;
  },
};
