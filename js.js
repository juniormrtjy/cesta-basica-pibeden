var sosMain = document.querySelector('#sos')
var leftArrow = document.querySelector('.a-left')
var rightArrow = document.querySelector('.a-right')

rightArrow.addEventListener('click', function () {
  sosMain.classList.add('show')
  rightArrow.style.visibility = 'hidden'
  leftArrow.style.visibility = 'visible'
})
leftArrow.addEventListener('click', function () {
  sosMain.classList.remove('show')
  rightArrow.style.visibility = 'visible'
  leftArrow.style.visibility = 'hidden'
})
