let tabMenu = document.querySelectorAll('.js-tabmenu li')

let tabContent = document.querySelectorAll('.js-tabcontent section')

tabContent[0].classList.add('active')

if (tabMenu.length && tabContent.length) {
   
    function ActibeTab(i) {
        tabContent.forEach(el => el.classList.remove('active'))
        tabContent[i].classList.add('active')
    }
    
    tabMenu.forEach((el, i) => {
        el.addEventListener('click', () => {
            
            ActibeTab(i)
        })})
}
