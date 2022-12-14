Firstword.js
let firstWord = [ "copy", "cat", "food", "sun", "night", "love", "public", "stop", "puppy", "job" ];
 let secondWord = ["shine", "paste", "moon", "day", "sad", "dream", "private", "dream", "old", "run"];
 let randonFirstWord = firstWord[Math.floor(Math.random() * 10)];
 let randonSecondWord = secondWord[Math.floor(Math.random() * 10)];
 let startupName = randonFirstWord + " " + randonSecondWord;
 startupNameLength = startupName.length
 console.log("'The startup: " + "\'" + startupName + "\'" +" contains "
 + startupNameLength + " characters.'");