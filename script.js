//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


/*==================== CHANGE THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Thème précédemment sélectionné (si l'utilisateur a choisi)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Nous obtenons le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Nous validons si l'utilisateur a précédemment choisi un thème
if (selectedTheme) {
  // Si la validation est remplie, nous demandons quelle était la question pour savoir si nous avons activé ou désactivé le sombre
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activer / désactiver le thème manuellement avec le bouton
themeButton.addEventListener('click', () => {
    // Ajouter ou supprimer le thème sombre / icône
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Nous sauvegardons le thème et l'icône actuelle que l'utilisateur a choisi
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
})

sr.reveal('.home-data, .about-img, .skills-subtitle, .skills-text', {} )
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img', {delay: 400} )
sr.reveal('.home-social-icon', {interval: 200} )
sr.reveal('.skills-data, .work-img, .contact-input', {interval: 200} )