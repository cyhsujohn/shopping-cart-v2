import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

const addToCart = button => {
  button.addEventListener('click', (e) => {
    const card = e.currentTarget.parentElement.parentElement
    const price = parseFloat(card.querySelector('.price')
                      .textContent
                      .replace('$',''))
    const title = card.querySelector('.card-title').textContent
  })}



document.addEventListener('DOMContentLoaded', function(){
  const catButton = document.querySelectorAll('.card .btn')
  catButton.forEach(addToCart)
})
