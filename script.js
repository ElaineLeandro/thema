
function darkMode() {
  const body = document.querySelector('body')
  const header = body.querySelector('.header')
  body.classList.toggle('dark')
  header.classList.toggle('dark-title')
  
}

function darkModeContainer() {
  const cardItem = [...document.querySelectorAll('.item')]
  cardItem.map((card) => {card.classList.toggle('dark-item')})
  console.log("Cor",cardItem)
  
}

document.querySelector('.button').addEventListener("click", darkMode)
document.querySelector('.button').addEventListener("click", darkModeContainer)

