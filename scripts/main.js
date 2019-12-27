//stores all images
let myImage = document.querySelector('img');

//calls a function when an image is clicked
myImage.onclick = function() {
    //stores the source of the image in a variable
    let mySrc = myImage.getAttribute('src');
    //checks to see what the source is and changes to the other one
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/logo2.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}

//gets all the buttons and h1 and stores them
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Gets the user name
function setUserName() {
    //username stored from the input of prompt
    let myName = prompt('Please enter your name.');
    //check to see if it's null or empty and retries it
    if(!myName || myName === null) {
      setUserName();
      //if username exists stores it and changes h1
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  //makes the function work if there is no username saved locally, else use what is saved
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  //calls the function manually
  myButton.onclick = function() {
    setUserName();
  }