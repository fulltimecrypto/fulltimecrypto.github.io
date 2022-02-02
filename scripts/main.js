let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bitcoin-image.jpeg') {
      myImage.setAttribute('src','images/bitcoin-image2.jpeg');
    } else {
      myImage.setAttribute('src','images/bitcoin-image.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Bitcoin is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bitcoin is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }