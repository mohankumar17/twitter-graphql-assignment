const tweetsList = [
  {
    id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    body: "Paul Tweet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-06-01",
    AuthorID: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    Stats: {
      views: 122,
      likes: 31,
      retweets: 15,
    },
  },
  {
    id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    body: "Paul Tweet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-06-02",
    AuthorID: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    Stats: {
      views: 156,
      likes: 57,
      retweets: 28,
    },
  },
  {
    id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
    body: "Paul Tweet 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-06-03",
    AuthorID: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    Stats: {
      views: 178,
      likes: 89,
      retweets: 35,
    },
  },
  {
    id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
    body: "Tina Tweet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-05-11",
    AuthorID: "34115aac-0ff5-4859-8f43-10e8db23602b",
    Stats: {
      views: 254,
      likes: 133,
      retweets: 115,
    },
  },
  {
    id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
    body: "Tina Tweet 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-05-15",
    AuthorID: "34115aac-0ff5-4859-8f43-10e8db23602b",
    Stats: {
      views: 322,
      likes: 116,
      retweets: 72,
    },
  },
  {
    id: "f01bcdec-6783-464e-8f9e-8416830f7569",
    body: "John Tweet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lacus eget eros fermentum, et rutrum tortor suscipit.",
    date: "2022-04-17",
    AuthorID: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    Stats: {
      views: 15,
      likes: 6,
      retweets: 2,
    },
  },
];

const usersList = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    username: "paulbrandon17",
    first_name: "Paul",
    last_name: "Brandon",
    avatar_url: "https://twitter-images/img-paul",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    username: "tinanailor1994",
    first_name: "Tina",
    last_name: "Nailor",
    avatar_url: "https://twitter-images/img-tina",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    username: "jahndoe144",
    first_name: "John",
    last_name: "Doe",
    avatar_url: "https://twitter-images/img-john",
  },
];

exports.db = {
  tweetsList,
  usersList,
};
