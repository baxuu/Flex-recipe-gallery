const panels = document.querySelectorAll('.panel');
const h1 = document.querySelector('.apllepie')
panels.forEach(panel => panel.addEventListener('click', changeAnimation));


function changeAnimation() {
    this.classList.toggle('changed');

    if (this.classList.contains('changed')) {
        h1.classList.add("hideh1")
    } else {
        h1.classList.remove("hideh1")
    }
}