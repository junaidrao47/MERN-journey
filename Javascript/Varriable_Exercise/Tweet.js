var tweet = prompt("Write your Tweet: ");
var tweetCount = tweet.length;
var slised = tweet.slice(0,140);
tweetCount=slised.length
alert("Your Tweet is : "  + slised);
alert("You have written " + tweetCount + " characters. You have remaining " + (140 - tweetCount) + "!");
