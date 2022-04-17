// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Handle Click Event
// Grab all the "like" elements
const likeElements = document.querySelectorAll('.like span');
// Add event listeners to like elements

likeElements.forEach(elements => {
  elements.addEventListener('click', (e) => {
    // const likeElement = e.target
    const toRemove = document.querySelector('#modal')
    if (e.target.textContent === EMPTY_HEART) {
      mimicServerCall()
      .then(e => {
        elements.classList.add('activated-heart')
        elements.textContent = FULL_HEART
        toRemove.classList.add('hidden')
        console.log('success')
      })
      .catch(e => {
        const toRemove = document.querySelector('#modal')
        toRemove.classList.remove('hidden')
        console.log('fail')
      })
    } else {
      mimicServerCall()
      .then(e => {
        elements.classList.remove('activated-heart')
        elements.textContent = EMPTY_HEART
        toRemove.classList.add('hidden')
        console.log('success')
      })
      .catch(e => {
        
        toRemove.classList.remove('hidden')
        console.log('fail')
      })
    }
  });
});

// function handleSuccess (e) {

//   likeElement.classList.add("activated-heart")
// }

// function handleFailure (e) {
//   console.log(e)
// }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
