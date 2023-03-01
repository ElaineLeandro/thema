
function darkModeCard() {
  const cardItem = document.querySelectorAll('.item')
  cardItem.forEach((card) => card.classList.toggle('dark-item'))
}

function darkMode() {
  const body = document.querySelector('body')
  const header = document.querySelector('.header')
  const text = document.querySelectorAll('div p, h2')
  body.classList.toggle('dark')
  header.classList.toggle('dark-title')
  text.forEach((contex) => contex.classList.toggle('content')) 

  darkModeCard()
}

document.querySelector('.button').addEventListener("click", darkMode)


