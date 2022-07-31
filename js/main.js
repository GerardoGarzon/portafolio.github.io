//Get the button
let mybutton = document.getElementById("btn-back-to-top")
let darkMode = document.getElementById("darkmode-button")
let darkModeNavbar = document.getElementById("darkmode-button-navbar")
let navbar = document.getElementById('navbar-container')
let logoImg = document.getElementById('logo')
let logoFooter = document.getElementById('logo-footer')
let body = document.getElementById('body')
let navbarLinks = document.getElementsByClassName('nav-link')
let aboutme = document.getElementById('aboutme')
let nameProfile = document.getElementById('name')
let sectionWorking = document.getElementById('experiance')
let sectionProjects = document.getElementById('projects')
let sectionEducation = document.getElementById('education')
let sectionContact = document.getElementById('contact')
let sendButton = document.getElementById('sendButton')
let footer = document.getElementById('footer')

const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

const backToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

const enableDisableDarkmode = () => {
    let iconElement = darkMode.childNodes[1]
    let iconElementNavbar = darkModeNavbar.childNodes[1]
    
    if (iconElementNavbar.classList[3] == "fa-sun") {
        iconElementNavbar.classList.remove("fa-sun")
        iconElementNavbar.classList.add("fa-moon")

        iconElement.classList.remove("fa-sun")
        iconElement.classList.add("fa-moon")

        navbar.classList.remove('bg-body')
        navbar.classList.add('navbar-bg-darkmode')
        navbar.classList.add('navbar-dark')

        logoImg.src = 'assets/logo-dark.png'
        logoFooter.src = 'assets/logo-footer.png'

        body.classList.add('body-bg-darkmode')
        body.classList.remove('bg-body')

        for (let index = 0; index < navbarLinks.length; index++) {
            const element = navbarLinks[index];
            element.classList.remove("text-dark")
            element.classList.add("text-light")
        }

        aboutme.classList.remove('text-dark')
        aboutme.classList.add('text-light')

        nameProfile.classList.add('text-bg-darkmode')
        nameProfile.classList.remove('text-warning')

        mybutton.classList.add('button-bg-darkmode')
        mybutton.classList.remove('btn-secondary')

        sectionWorking.classList.remove('text-dark')
        sectionWorking.classList.add('text-light')

        sectionProjects.classList.remove('text-dark')
        sectionProjects.classList.add('text-light')

        sectionEducation.classList.remove('text-dark')
        sectionEducation.classList.add('text-light')

        sectionContact.classList.remove('text-dark')
        sectionContact.classList.add('text-light')

        sendButton.classList.add('button-bg-darkmode')
        sendButton.classList.remove('btn-warning')

        footer.classList.add('text-light')
        footer.classList.remove('text-dark')
    } else {
        iconElementNavbar.classList.add("fa-sun")
        iconElementNavbar.classList.remove("fa-moon")

        iconElement.classList.add("fa-sun")
        iconElement.classList.remove("fa-moon")

        navbar.classList.add('bg-body')
        navbar.classList.remove('navbar-bg-darkmode')
        navbar.classList.remove('navbar-dark')

        logoImg.src = 'assets/logo.png'
        logoFooter.src = 'assets/logo.png'
        
        body.classList.remove('body-bg-darkmode')
        body.classList.add('bg-body')

        for (let index = 0; index < navbarLinks.length; index++) {
            const element = navbarLinks[index];
            element.classList.add("text-dark")
            element.classList.remove("text-light")
        }

        aboutme.classList.add('text-dark')
        aboutme.classList.remove('text-light')

        nameProfile.classList.remove('text-bg-darkmode')
        nameProfile.classList.add('text-warning')

        mybutton.classList.remove('button-bg-darkmode')
        mybutton.classList.add('btn-secondary')

        sectionWorking.classList.add('text-dark')
        sectionWorking.classList.remove('text-light')

        sectionProjects.classList.add('text-dark')
        sectionProjects.classList.remove('text-light')

        sectionEducation.classList.add('text-dark')
        sectionEducation.classList.remove('text-light')

        sectionContact.classList.add('text-dark')
        sectionContact.classList.remove('text-light')

        sendButton.classList.remove('button-bg-darkmode')
        sendButton.classList.add('btn-warning')

        footer.classList.remove('text-light')
        footer.classList.add('text-dark')
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    scrollFunction()
};

darkMode.addEventListener('click', enableDisableDarkmode)
darkModeNavbar.addEventListener('click', enableDisableDarkmode)
