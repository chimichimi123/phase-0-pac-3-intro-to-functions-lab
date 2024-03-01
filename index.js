function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }
const string = "Hello";
  function logShout(string) {
    console.log(string); 
console.log(string.toUpperCase());
  
console.log(string === string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string); 
console.log(string.toLowerCase());
  
console.log(string === string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate (string) {
    var quiet = "I can\'t hear you!";
    var loud = "YES INDEED!";
    var dinner = "I would love to!";
    if (string.toLowerCase() === string) {
        return quiet;
    }
    else if (string.toUpperCase() === string) {
        return loud;
    }
    else if ("Let's have dinner together!" === string) {
      return dinner;
    }
  }