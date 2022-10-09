let header = document.querySelector('.header')
// let body = document.querySelector('body')
let section = document.querySelector('.data-section')
let num = document.querySelector('.count')
let value = 0
let workshop = document.querySelector('.total-workshop')
let year = document.querySelector('.total-year')
let lesson = document.querySelector('.total-lesson')
let bar = document.querySelector('.bars')
let ulhead = document.querySelector('.ul-header')
bar.addEventListener('click', () => {
  ulhead.style.display = 'block'
})

setTimeout(() => {
  window.addEventListener('mouseover', () => {
    for (let i = 1; i <= 5000; i++) {
      let id = setInterval(() => {
        if (num.innerText == 5000) {
          clearInterval(id)
        } else {
          console.dir(value)
          value = i
          num.innerText = value
        }
        // 2
        if (workshop.innerText == 4000) {
          clearInterval(id)
        } else {
          value = i
          workshop.innerText = value
        }
        // 3
        if (year.innerText == 570) {
          clearInterval(id)
        } else {
          value = i
          year.innerText = value
        }
        // 4
        if (lesson.innerText == 900) {
          clearInterval(id)
        } else {
          value = i
          lesson.innerText = value
        }
      }, 400)
    }
  })
}, 4000)

// scrool header

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.style.background = 'gray'
  }
  if (window.scrollY < 100) {
    header.style.background =
      'linear-gradient(rgba(255, 192, 203, 0.1),rgba(255, 255, 255, 0.1)'
  }
})
