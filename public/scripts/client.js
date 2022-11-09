/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const createTweetElement = data => {
  let $tweet = $(`<article class="tweet">
  <header>
  <div>${data.user.name}</div>
  <div>${data.user.avatars}</div>
  <div>${data.user.handle}</div>
  </header>
  <p>${data.content.text}</p>
  <footer>
  <div>${data.created_at}</div>
  <ul>
  <i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i>
  </ul>
  </footer>
  </article>
  `);
  return $tweet;
};

const renderTweets = data => {
  for (let tweet in tweetData) {
    createTweetElement(tweet);
    console.log(tweetData[1])
  }
  return;
  
};

const submitTweet = event => {
  event.preventDefault();
};

$(document).ready(function() {
  console.log("Hello TWEETER!")
  
// const $tweet = createTweetElement(tweetData);
// console.log($tweet);
// $('#tweet-container').append($tweet);
console.log(renderTweets(tweetData));
});