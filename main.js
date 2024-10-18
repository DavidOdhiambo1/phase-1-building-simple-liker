// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').className = 'hidden'


const heart = document.querySelectorAll('span.like-glyph')
heart.forEach(item =>{
    item.addEventListener('click', ()=>{
      
      mimicServerCall()
      .then(res => {
        if (item.textContent === EMPTY_HEART){
        item.textContent = FULL_HEART
        item.classList = "activated-heart"
        }else{
          item.textContent = EMPTY_HEART
          item.classList.remove('activated-heart')
        }
      })
      .catch((error) => {
        document.querySelector('div#modal').className = ''
        document.getElementById('modal-message').textContent = error
        setTimeout(()=>{document.getElementById('modal').className = 'hidden' }, 3000)
      })
    })
})


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
