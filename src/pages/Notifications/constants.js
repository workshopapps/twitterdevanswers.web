export const notifications = [ //  TODO: To be gotten directly from the notifications api / backend endpoint
{
  id: 1,
  type: "like",
  unread: true,
  from: {
    displayName: "Prosperoo",
    username: "prosper",
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d3/d3f3fa80acbf4da4188adc58e540e9715340c8a6_full.jpg',
  },
  question: {
    from: {
      displayName: "Miracleufo",
      username: "miracleufo",
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ac/ac7a5acff1967bf75c6b6865785b7becd3ad55a9_full.jpg',
    },
    title: "Why does the NoReverse match error pop up when I’m trying to marginate my django website?",
    body: "I have a list of data from my models that i would like to paginate as it looks flooded on the singular page and it generally takes alonger",
  },
  timestamp: new Date(),
},
{
  id: 2,
  type: "for-you",
  unread: false,
  title: "3 new Questions",
  tag: "python",
  timestamp: new Date(),
},
{
  id: 3,
  type: "reply",
  unread: false,
  from: {
    displayName: "Adekunle",
    username: "ike",
    avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d3/d3f3fa80acbf4da4188adc58e540e9715340c8a6_full.jpg',
  },
  question: {
    id: 'abcd',
    title: "Save form data to XML using PHP with overwrite feature Ask Question",
    body: "I'm trying to make form data save in an exertnal XML file. The XML file already exists and is already populated with some data. I need to save the form data to the XML file but it needs to add new record everytime EXCEPT if the section in the XML file is the same as the new form submission. If that happens, it needs to modify the record in the XML file that had the same data.",
    avatar: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ac/ac7a5acff1967bf75c6b6865785b7becd3ad55a9_full.jpg",
  },
  timestamp: new Date(),
},
{
  id: 4,
  type: "wallet-add",
  amount: 0.15,
  unread: true,
  timestamp: new Date(),
},
{
  id: 5,
  type: "marked-as-correct",
  unread: false,
  question: {
    from: {
      displayName: "CodeFreak",
      username: "olamide",
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d3/d3f3fa80acbf4da4188adc58e540e9715340c8a6_full.jpg',
    },
    title: "Cant register FireBase user from Flutter",
    body: "I am unable to register a user from my app written in Flutter. I am also unable to get some form for error message. I can debug and see my createUser function is called and the arguments looks good. Nothing happens after I call \"FirebaseAuth.instance.createUserWithEmailAndPassword\". No exception and nothing is printed in the FireBase emulator console. What am I missing here? Here is what I got:",
  },
  timestamp: new Date(),
},
{
  id: 6,
  type: "for-you",
  unread: true,
  question: {
    from: {
      displayName: "Libra",
      username: "emeka_chuks",
      avatar: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/ac/ac7a5acff1967bf75c6b6865785b7becd3ad55a9_full.jpg',
    },
  },
  timestamp: new Date(),
},
{
  id: 7,
  type: "wallet-remove",
  unread: false,
  amount: 0.12,
  timestamp: new Date(),
},
];
