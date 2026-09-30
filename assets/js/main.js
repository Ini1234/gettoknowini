const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show')
    toggle.setAttribute('aria-expanded', String(isOpen))
  })
}

showMenu('nav-toggle', 'nav-menu')

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu')
    const toggle = document.getElementById('nav-toggle')
    navMenu?.classList.remove('show')
    toggle?.setAttribute('aria-expanded', 'false')
  })
})

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 90
    const sectionId = current.getAttribute('id')
    const link = document.querySelector('.nav__menu a[href*="' + sectionId + '"]')

    if (!link) return

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', scrollActive, { passive: true })

const year = document.getElementById('year')
if (year) year.textContent = String(new Date().getFullYear())
